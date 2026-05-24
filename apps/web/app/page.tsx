import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>El seguro de tu comunidad, por fin claro. Tú al control.</h1>
        <p className="subtle">Transparencia radical para presidentes autogestionados: entiende qué cubre tu póliza y controla los siniestros sin intermediarios opacos.</p>
        <div className="grid grid-3" style={{ marginTop: '1rem' }}>
          <Link href="/presidentes" className="card"><h3>Soy presidente</h3><p>Controla la salud aseguradora de tu comunidad.</p></Link>
          <Link href="/propietarios" className="card"><h3>Soy propietario</h3><p>Entiende en lenguaje claro qué cubre el seguro comunitario.</p></Link>
          <Link href="/diagnostico" className="card"><h3>Soy administrador</h3><p className="subtle">Acceso secundario al diagnóstico informativo.</p></Link>
        </div>
      </section>
      <section style={{ marginTop: '1.5rem' }} className="card">
        <strong>Franja de confianza:</strong> Medialia Group Correduría de Seguros SL · DGSFP J-3149 · Diagnóstico informativo preliminar.
      </section>
      <footer><div className="container">Medialia Group Correduría de Seguros SL · DGSFP J-3149</div></footer>
    </main>
  );
}
