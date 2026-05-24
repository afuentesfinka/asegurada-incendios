'use client';
import { useMemo, useState } from 'react';
import { ScorePill, Shell, SiteFooter, SiteHeader } from '../components';

const steps = ['Identificación', 'Edificio', 'Póliza actual', 'Contacto'];
const maxPdfSizeMb = 15;

export default function Page() {
  const [branch, setBranch] = useState<'pdf' | 'quiz' | null>(null);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [status, setStatus] = useState('');
  const [form, setForm] = useState<any>({ origen: 'web', consentimientoRgpd: false });
  const [uploadForm, setUploadForm] = useState<any>({ consentimientoRgpd: false, nombre: '', email: '', telefono: '', comunidad: '' });
  const [pdf, setPdf] = useState<File | null>(null);
  const f = (k: string, v: any) => setForm((p: any) => ({ ...p, [k]: v }));
  const uf = (k: string, v: any) => setUploadForm((p: any) => ({ ...p, [k]: v }));

  const progress = useMemo(() => `${((step + 1) / steps.length) * 100}%`, [step]);

  const submitQuiz = async () => {
    const r = await fetch('http://localhost:3001/diagnostico', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
    });
    setResult(await r.json());
  };

  const submitPdfBranch = async () => {
    if (!pdf || pdf.type !== 'application/pdf' || pdf.size > maxPdfSizeMb * 1024 * 1024 || !uploadForm.consentimientoRgpd) {
      setStatus('Revisa el PDF (máx. 15MB) y acepta RGPD para continuar.');
      return;
    }
    const payload = new FormData();
    payload.append('pdf', pdf);
    payload.append('metadata', JSON.stringify(uploadForm));

    const r = await fetch('/api/diagnostico-poliza', { method: 'POST', body: payload });
    const body = await r.json();
    setResult(body);
    setStatus(body?.message || 'Solicitud recibida.');
  };

  return (<><SiteHeader /><Shell><section className="form-shell"><h1>Diagnóstico de salud aseguradora</h1><p className="lead">Diagnóstico orientativo: la revisión final y la contratación las realiza una persona asesora habilitada de Medialia (DGSFP J-3149).</p>
    {!branch && <div className="branch-grid"><button className="branch-card" onClick={() => setBranch('pdf')}><h2>Tengo mi póliza</h2><p>Sube el PDF y prepararemos el diagnóstico para que lo revise un asesor habilitado.</p></button><button className="branch-card" onClick={() => setBranch('quiz')}><h2>No tengo la póliza a mano</h2><p>Completa el cuestionario en 4 pasos y obtén tu Score de Salud Aseguradora.</p></button></div>}

    {branch === 'quiz' && !result && <><p className="lead">Paso {step + 1} de {steps.length}: {steps[step]}</p><div className="progress"><span style={{ width: progress }} /></div><div className="form-card">
      {step === 0 && <><label>Dirección</label><input onChange={(e) => f('direccion', e.target.value)} /><label>CP</label><input onChange={(e) => f('codigoPostal', e.target.value)} /><label>Población</label><input onChange={(e) => f('poblacion', e.target.value)} /></>}
      {step === 1 && <><label>Año</label><input onChange={(e) => f('anio', Number(e.target.value) || undefined)} /><label>Nº viviendas</label><input onChange={(e) => f('numeroViviendas', Number(e.target.value) || undefined)} /><label>Ascensor</label><select onChange={(e) => f('ascensor', e.target.value === 'si')}><option>No lo sé</option><option value="si">Sí</option><option value="no">No</option></select></>}
      {step === 2 && <><label>Compañía</label><input onChange={(e) => f('companiaActual', e.target.value)} /><label>Vencimiento</label><input onChange={(e) => f('vencimiento', e.target.value)} /><label>Capital continente</label><input onChange={(e) => f('capitalContinente', Number(e.target.value) || undefined)} /></>}
      {step === 3 && <><label>Nombre</label><input onChange={(e) => f('nombre', e.target.value)} /><label>Rol</label><input onChange={(e) => f('rol', e.target.value)} /><label>Email</label><input onChange={(e) => f('email', e.target.value)} /><label>Teléfono</label><input onChange={(e) => f('telefono', e.target.value)} /><label className="check"><input type="checkbox" onChange={(e) => f('consentimientoRgpd', e.target.checked)} /> Acepto RGPD y entiendo que este diagnóstico es orientativo y no vinculante.</label></>}
      <div className="cta-row"><button onClick={() => setBranch(null)} className="btn btn-light">Cambiar rama</button>{step > 0 && <button onClick={() => setStep(step - 1)} className="btn btn-light">Atrás</button>}{step < 3 ? <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Siguiente</button> : <button className="btn btn-primary" onClick={submitQuiz}>Calcular score</button>}</div>
    </div></>}

    {branch === 'pdf' && !result && <div className="form-card"><label>PDF de póliza actual</label><input type="file" accept="application/pdf" onChange={(e) => setPdf(e.target.files?.[0] || null)} /><p className="meta-note">Formato PDF · tamaño máximo {maxPdfSizeMb}MB</p><label>Nombre y apellidos</label><input onChange={(e) => uf('nombre', e.target.value)} /><label>Email</label><input onChange={(e) => uf('email', e.target.value)} /><label>Teléfono</label><input onChange={(e) => uf('telefono', e.target.value)} /><label>Comunidad / referencia</label><input onChange={(e) => uf('comunidad', e.target.value)} /><label className="check"><input type="checkbox" onChange={(e) => uf('consentimientoRgpd', e.target.checked)} /> Acepto el tratamiento RGPD del documento y entiendo que la orientación no sustituye asesoramiento vinculante.</label><p className="meta-note">Tu póliza será analizada por nuestro equipo y te contactará una persona asesora habilitada de Medialia (DGSFP J-3149).</p><div className="cta-row"><button onClick={() => setBranch(null)} className="btn btn-light">Cambiar rama</button><button className="btn btn-primary" onClick={submitPdfBranch}>Enviar póliza</button></div>{status && <p className="meta-note">{status}</p>}</div>}

    {result && <section className="form-card">{branch === 'quiz' ? <><h2>Score: {result.score}/100</h2><ScorePill semaforo={result.semaforo} /><ul>{result.redFlags?.map((r: string) => <li key={r}>{r}</li>)}</ul></> : <><h2>Solicitud recibida</h2><p>{status || 'Analizaremos tu póliza y te contactará un asesor habilitado.'}</p></>}<div className="cta-row"><button className="btn btn-primary">Hablar con un asesor habilitado (Medialia)</button></div></section>}
  </section></Shell><SiteFooter /></>);
}
