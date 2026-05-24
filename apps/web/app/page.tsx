import Link from 'next/link';
import { FeatureCard, HeroArt, Icons, Shell, SiteFooter, SiteHeader, TrustBand } from './components';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Shell>
        <section className="hero-grid">
          <div>
            <p className="eyebrow">Transparencia y control para tu comunidad</p>
            <h1>El seguro de tu comunidad, por fin claro. Tú al control.</h1>
            <p className="lead">Entiende coberturas, detecta riesgos y gestiona siniestros con criterio. Sin intermediarios opacos, con información accionable para presidentes autogestionados.</p>
            <div className="cta-row">
              <Link href="/diagnostico" className="btn btn-primary">Diagnóstico gratis</Link>
              <Link href="/coberturas" className="btn btn-light">Ver coberturas</Link>
            </div>
          </div>
          <HeroArt />
        </section>

        <section className="soft-section">
          <h2>Empieza por tu perfil</h2>
          <div className="card-grid">
            <Link href="/presidentes" className="card-link card-primary">
              <FeatureCard title="Soy presidente" text="Evalúa infraseguro, derramas sorpresa y opacidad en minutos." icon={Icons.building} />
            </Link>
            <Link href="/propietarios" className="card-link">
              <FeatureCard title="Soy propietario" text="Comprende qué cubre tu póliza comunitaria y qué debes revisar." icon={Icons.owner} />
            </Link>
            <Link href="/diagnostico" className="card-link">
              <FeatureCard title="Soy administrador" text="Acceso secundario al diagnóstico para dar soporte técnico." icon={Icons.admin} />
            </Link>
          </div>
        </section>

        <TrustBand />
      </Shell>
      <SiteFooter />
    </>
  );
}
