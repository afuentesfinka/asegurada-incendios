'use client';
import { useState } from 'react';
export default function Page(){const[q,sq]=useState('');const[a,sa]=useState('');return <main className='container'><h1>Consultor IA</h1><textarea value={q} onChange={e=>sq(e.target.value)} /><button className='cta' onClick={async()=>{const r=await fetch('/api/chat-proxy',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:q})});const j=await r.json();sa(j.answer||'Sin respuesta.')}}>Consultar</button><p>{a}</p></main>}
