import { Shell, SiteFooter, SiteHeader, TrustBand } from '../components';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <Shell>
        <section className="hero-simple">
          <h1>Sobre Asegurada de Comunidades</h1>
          <p className="lead">Nacemos para dar transparencia radical a presidentes autogestionados: información clara, decisiones trazables y control del seguro comunitario.</p>
        </section>
        <TrustBand />
      </Shell>
      <SiteFooter />
    </>
  );
}
