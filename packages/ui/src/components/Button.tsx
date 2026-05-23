import React from 'react';
export function Button({ children }: React.PropsWithChildren) {
  return <button style={{ background: 'var(--color-primary)', color: 'white', borderRadius: 12, border: 0, padding: '0.8rem 1rem' }}>{children}</button>;
}
