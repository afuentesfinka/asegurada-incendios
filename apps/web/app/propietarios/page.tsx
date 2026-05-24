import Link from 'next/link';
import { Shell, SiteFooter, SiteHeader } from '../components';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <Shell>
        <section className="hero-simple">
          <h1>Propietarios: entiende qué cubre tu seguro comunitario</h1>
          <p className="lead">Te explicamos en lenguaje claro coberturas, límites y exclusiones para que participes con criterio en las decisiones de tu comunidad.</p>
          <div className="cta-row">
            <Link href="/consultor-ia" className="btn btn-light">Hablar con consultor</Link>
            <Link href="/diagnostico" className="btn btn-primary">Ir al diagnóstico</Link>
          </div>
        </section>
      </Shell>
      <SiteFooter />
    </>
  );
}
