'use client';
import { useState } from 'react';
import { ScorePill, Shell, SiteFooter, SiteHeader } from '../components';

const steps = ['Identificación', 'Edificio', 'Póliza actual', 'Contacto'];

export default function Page() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [form, setForm] = useState<any>({ origen: 'web', consentimientoRgpd: false });
  const f = (k: string, v: any) => setForm((p: any) => ({ ...p, [k]: v }));

  const submit = async () => {
    const r = await fetch('http://localhost:3001/diagnostico', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setResult(await r.json());
  };

  return (
    <>
      <SiteHeader />
      <Shell>
        <section className="form-shell">
          <h1>Diagnóstico de salud aseguradora</h1>
          <p className="lead">Paso {step + 1} de {steps.length}: {steps[step]}</p>
          <div className="progress"><span style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>

          {!result && (
            <div className="form-card">
              {step === 0 && <><label>Dirección</label><input onChange={(e) => f('direccion', e.target.value)} /><label>CP</label><input onChange={(e) => f('codigoPostal', e.target.value)} /><label>Población</label><input onChange={(e) => f('poblacion', e.target.value)} /></>}
              {step === 1 && <><label>Año</label><input onChange={(e) => f('anio', Number(e.target.value) || undefined)} /><label>Nº viviendas</label><input onChange={(e) => f('numeroViviendas', Number(e.target.value) || undefined)} /><label>Ascensor</label><select onChange={(e) => f('ascensor', e.target.value === 'si')}><option>No lo sé</option><option value="si">Sí</option><option value="no">No</option></select></>}
              {step === 2 && <><label>Compañía</label><input onChange={(e) => f('companiaActual', e.target.value)} /><label>Vencimiento</label><input onChange={(e) => f('vencimiento', e.target.value)} /><label>Capital continente</label><input onChange={(e) => f('capitalContinente', Number(e.target.value) || undefined)} /></>}
              {step === 3 && <><label>Nombre</label><input onChange={(e) => f('nombre', e.target.value)} /><label>Rol</label><input onChange={(e) => f('rol', e.target.value)} /><label>Email</label><input onChange={(e) => f('email', e.target.value)} /><label>Teléfono</label><input onChange={(e) => f('telefono', e.target.value)} /><label className="check"><input type="checkbox" onChange={(e) => f('consentimientoRgpd', e.target.checked)} /> Acepto RGPD y análisis informativo preliminar.</label></>}
              <div className="cta-row">{step > 0 && <button onClick={() => setStep(step - 1)} className="btn btn-light">Atrás</button>}{step < 3 ? <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Siguiente</button> : <button className="btn btn-primary" onClick={submit}>Calcular score</button>}</div>
            </div>
          )}

          {result && (
            <section className="form-card">
              <h2>Score: {result.score}/100</h2>
              <ScorePill semaforo={result.semaforo} />
              <ul>{result.redFlags?.map((r: string) => <li key={r}>{r}</li>)}</ul>
              <div className="cta-row"><button className="btn btn-primary">Hablar con un asesor</button></div>
            </section>
          )}
        </section>
      </Shell>
      <SiteFooter />
    </>
  );
}
