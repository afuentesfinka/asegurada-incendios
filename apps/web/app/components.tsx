import Link from 'next/link';
import type { ReactNode } from 'react';

const i = (label: string) => <span className="icon-dot" aria-hidden>{label}</span>;

export function SiteHeader() {
  return <header className="site-header"><div className="shell nav-wrap"><Link href="/" className="logo-link" aria-label="Asegurada de Comunidades inicio"><img src="/logos/COM_transp.svg" alt="Asegurada de Comunidades" className="logo" /></Link><nav className="main-nav"><Link href="/presidentes">Presidentes</Link><Link href="/propietarios">Propietarios</Link><Link href="/coberturas">Qué cubre tu seguro</Link><Link href="/sobre-nosotros">Sobre nosotros</Link></nav><Link href="/diagnostico" className="btn btn-primary">Diagnóstico gratis</Link></div></header>;
}
export function SiteFooter() { return <footer className="site-footer"><div className="shell footer-wrap"><img src="/logos/COM_negativo.svg" alt="Asegurada de Comunidades" className="logo logo-footer" /><p>Medialia Group Correduría de Seguros SL · DGSFP J-3149</p></div></footer>; }
export function Shell({ children }: { children: ReactNode }) { return <main className="shell page-stack">{children}</main>; }
export function TrustBand() { return <section className="trust">Respaldado por Medialia Group Correduría de Seguros SL · Registro DGSFP J-3149</section>; }

export function HeroArt() { return <div className="hero-art" aria-hidden><div className="art-card">{i('▦')}<p>Comunidad protegida</p></div><svg viewBox="0 0 420 260" className="skyline"><rect x="0" y="150" width="120" height="110" rx="12" /><rect x="90" y="105" width="90" height="155" rx="12" /><rect x="170" y="120" width="82" height="140" rx="12" /><rect x="240" y="75" width="98" height="185" rx="12" /><rect x="328" y="130" width="86" height="130" rx="12" /></svg><div className="art-badge">{i('◉')}<span className="flame">▲</span></div></div>; }
export function FeatureCard({ title, text, icon }: { title: string; text: string; icon: ReactNode }) { return <article className="feature-card"><div>{icon}</div><h3>{title}</h3><p>{text}</p></article>; }
export function ScorePill({ semaforo }: { semaforo: string }) { const tone = semaforo?.toLowerCase() === 'verde' ? 'ok' : semaforo?.toLowerCase() === 'amarillo' ? 'warn' : 'risk'; return <span className={`pill pill-${tone}`}>● {semaforo}</span>; }
export const Icons = { building: i('▦'), owner: i('◌'), admin: i('◎'), shield: i('◍'), alert: i('!'), file: i('≣'), search: i('?') };
