import React from 'react';
export function Badge({ children }: React.PropsWithChildren) {
  return <span style={{ background: 'var(--color-soft)', color: 'var(--color-ink)', borderRadius: 999, padding: '0.2rem 0.6rem' }}>{children}</span>;
}
