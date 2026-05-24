import Link from 'next/link';
import type { ReactNode } from 'react';


const lineIcon = (path: string) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
);
const dualPathIcon = (a: string, b: string) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={a} /><path d={b} /></svg>
);

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="logo-link" aria-label="Asegurada de Comunidades inicio">
          <img src="/logos/COM_transp.svg" alt="ASEGURADA DE COMUNIDADES" className="logo" />
        </Link>
        <nav className="main-nav">
          <Link href="/presidentes">Presidentes</Link>
          <Link href="/propietarios">Propietarios</Link>
          <Link href="/coberturas">Qué cubre tu seguro</Link>
          <Link href="/sobre-nosotros">Sobre nosotros</Link>
        </nav>
        <Link href="/diagnostico" className="btn btn-primary">Diagnóstico gratis</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-wrap"><img src="/logos/COM_negativo.svg" alt="ASEGURADA DE COMUNIDADES" className="logo logo-footer" /><p>Medialia Group Correduría de Seguros SL · DGSFP J-3149</p></div></footer>;
}

export function Shell({ children }: { children: ReactNode }) { return <main className="shell page-stack">{children}</main>; }
export function TrustBand() { return <section className="trust">Respaldado por Medialia Group Correduría de Seguros SL · Registro DGSFP J-3149</section>; }

export function HeroArt() {
  return (
    <div className="hero-art" aria-hidden>
      <svg viewBox="0 0 460 300" className="community-art">
        <rect x="22" y="115" width="84" height="154" rx="10" />
        <rect x="86" y="72" width="84" height="198" rx="10" />
        <rect x="156" y="97" width="78" height="173" rx="10" />
        <rect x="220" y="58" width="95" height="212" rx="10" />
        <rect x="302" y="88" width="72" height="182" rx="10" />
        <rect x="355" y="122" width="80" height="148" rx="10" />
        <path d="M0 270 C98 220, 360 220, 460 270 L460 300 L0 300 Z" className="ground" />
        <path d="M345 48c0 22-20 39-20 39s-20-17-20-39c0-15 10-25 20-35 10 10 20 20 20 35z" className="water" />
        <path d="M375 103c0 10-9 17-9 17s-9-7-9-17c0-7 4-11 9-16 5 5 9 9 9 16z" className="flame-mark" />
      </svg>
      <div className="art-chip">
<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 5-3.5 8.3-7 9-3.5-.7-7-4-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
 Comunidad protegida</div>
    </div>
  );
}

export function FeatureCard({ title, text, icon }: { title: string; text: string; icon: ReactNode }) { return <article className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>; }
export function ScorePill({ semaforo }: { semaforo: string }) { const tone = semaforo?.toLowerCase() === 'verde' ? 'ok' : semaforo?.toLowerCase() === 'amarillo' ? 'warn' : 'risk'; return <span className={`pill pill-${tone}`}>● {semaforo}</span>; }
export const Icons = {
  building: dualPathIcon('M12 3l2.7 4.5 5.3.6-3.9 3.8 1 5.3L12 15l-5.1 2.2 1-5.3L4 8.1l5.3-.6L12 3z', 'M8 20h8'),
  owner: dualPathIcon('M3 10.8L12 4l9 6.8', 'M6 10.8V20h12v-9.2'),
  admin: dualPathIcon('M3 7h18v13H3z', 'M8 7V4h8v3'),
  shield: dualPathIcon('M12 3l7 3v6c0 5-3.5 8.3-7 9-3.5-.7-7-4-7-9V6l7-3z', 'M9 12l2 2 4-4'),
  alert: lineIcon('M12 3c3 2.6 4.8 5.2 4.8 8.2A4.8 4.8 0 0 1 12 16a4.8 4.8 0 0 1-4.8-4.8C7.2 8.2 9 5.6 12 3z'),
  file: dualPathIcon('M6 2h9l5 5v15H6z', 'M15 2v6h5'),
  search: dualPathIcon('M12 3c3 2.5 5 4.9 5 7.9A5 5 0 0 1 12 16a5 5 0 0 1-5-5.1C7 7.9 9 5.5 12 3z', 'M11.8 15.8v5.2')
};
