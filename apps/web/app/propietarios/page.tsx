import Link from 'next/link';
export default function Page(){return <main className="container"><h1>Para propietarios</h1><p>Entiende en lenguaje claro qué cubre y qué no cubre el seguro de tu comunidad.</p><div style={{display:'flex',gap:12}}><Link href="/diagnostico" className="cta">Hacer diagnóstico</Link><Link href="/consultor-ia" className="card">Hablar con consultor IA</Link></div></main>}
