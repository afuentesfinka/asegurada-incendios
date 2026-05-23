import { Button, Card, Logo } from '@asegurada/ui';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', background: 'var(--color-soft)', minHeight: '100vh' }}>
      <Logo />
      <Card>
        <h1>El seguro de tu comunidad, por fin claro.</h1>
        <p>Fase 0 iniciada: cimientos del producto API-first.</p>
        <Button>Analiza tu póliza</Button>
      </Card>
    </main>
  );
}
