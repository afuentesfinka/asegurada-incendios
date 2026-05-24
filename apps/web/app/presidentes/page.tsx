import Link from 'next/link';
import { Icons, Shell, SiteFooter, SiteHeader, TrustBand } from '../components';

const pains = [
  { icon: Icons.shield, title: 'Infraseguro silencioso', text: 'Capital desactualizado que deja la comunidad expuesta.' },
  { icon: Icons.alert, title: 'Derrama sorpresa', text: 'Siniestro cubierto a medias por una póliza mal ajustada.' },
  { icon: Icons.file, title: 'Siniestro mal gestionado', text: 'Trámites lentos y respuestas difusas cuando más importa.' },
  { icon: Icons.search, title: 'Opacidad de información', text: 'Dificultad para entender qué está realmente contratado.' }
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <Shell>
        <section className="hero-simple">
          <h1>Presidencia con control real del seguro comunitario</h1>
          <p className="lead">Diagnostica riesgos clave de tu póliza y toma decisiones con claridad para proteger a tu comunidad.</p>
          <Link className="btn btn-primary" href="/diagnostico">Iniciar diagnóstico gratis</Link>
        </section>

        <section>
          <h2>Problemas que resolvemos</h2>
          <div className="card-grid">
            {pains.map((item) => (
              <article key={item.title} className="feature-card"><div>{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <TrustBand />
      </Shell>
      <SiteFooter />
    </>
  );
}
