import { Shell, SiteFooter, SiteHeader } from '../components';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <Shell>
        <section className="hero-simple">
          <h1>Qué cubre tu seguro comunitario</h1>
          <p className="lead">Guía educativa para diferenciar coberturas reales, límites y riesgos de infraseguro.</p>
        </section>
        <section className="card-grid">
          <article className="feature-card"><h3>Daños por agua</h3><p>Qué eventos suelen estar cubiertos y cuándo aparece la exclusión por mantenimiento.</p></article>
          <article className="feature-card"><h3>Continente vs contenido</h3><p>Cómo se valora cada bloque y por qué impacta en indemnizaciones.</p></article>
          <article className="feature-card"><h3>Responsabilidad civil</h3><p>Qué protege ante terceros y dónde suelen quedar huecos de cobertura.</p></article>
        </section>
      </Shell>
      <SiteFooter />
    </>
  );
}
