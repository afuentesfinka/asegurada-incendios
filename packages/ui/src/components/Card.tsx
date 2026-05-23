import React from 'react';
export function Card({ children }: React.PropsWithChildren) {
  return <section style={{ background: 'white', border: '1px solid #e6edf3', borderRadius: 16, padding: '1.2rem' }}>{children}</section>;
}
