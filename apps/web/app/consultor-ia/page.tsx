'use client';
import { useState } from 'react';
import { Shell, SiteFooter, SiteHeader } from '../components';

export default function Page() {
  const [q, sq] = useState('');
  const [a, sa] = useState('');

  return (
    <>
      <SiteHeader />
      <Shell>
        <section className="chat-wrap">
          <h1>Consultor IA de comunidades</h1>
          <p className="lead">Interfaz preparada para resolver dudas de cobertura y siniestros con lenguaje claro.</p>
          <div className="chat-box">
            <textarea value={q} onChange={(e) => sq(e.target.value)} placeholder="Ejemplo: ¿Qué diferencia hay entre continente y contenido?" />
            <button
              className="btn btn-primary"
              onClick={async () => {
                const r = await fetch('/api/chat-proxy', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: q }) });
                const j = await r.json();
                sa(j.answer || 'Sin respuesta.');
              }}
            >
              Consultar
            </button>
            <div className="chat-answer">{a || 'Tu respuesta aparecerá aquí.'}</div>
          </div>
        </section>
      </Shell>
      <SiteFooter />
    </>
  );
}
