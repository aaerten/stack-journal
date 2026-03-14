import { Button, Input, Badge } from '@stack-journal/ui';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700 }}>stack-journal — Design System Preview</h1>

      <section>
        <h2 style={{ marginBottom: '12px' }}>Button</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button isLoading>Loading</Button>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: '12px' }}>Input</h2>
        <Input label="Email" placeholder="you@example.com" helperText="We'll never share your email." />
        <br />
        <Input label="Password" type="password" error="Password is too short." />
      </section>

      <section>
        <h2 style={{ marginBottom: '12px' }}>Badge</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="Default" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
          <Badge label="Danger" variant="danger" />
          <Badge label="Info" variant="info" />
        </div>
      </section>
    </div>
  );
}

export default App;
