import React from 'react';
import { ErrorBoundary } from '@stack-journal/monitoring';

const ROADMAP = [
  { id: '01', status: 'done', name: 'Monorepo setup', sub: 'turborepo · pnpm workspaces · github actions', tag: 'packages', tagType: 'pkg' },
  { id: '02', status: 'done', name: 'Design system — atoms', sub: 'button · input · badge', tag: 'apps/shell', tagType: 'shell' },
  { id: '03', status: 'done', name: 'Storybook integration', sub: 'autodocs · interactive controls · visual testing', tag: 'packages/ui', tagType: 'pkg' },
  { id: '04', status: 'done', name: 'Design system — molecules', sub: 'searchbar · alertcard', tag: 'packages/ui', tagType: 'pkg' },
  { id: '05', status: 'done', name: 'Project hub', sub: 'single page · roadmap · app cards · links', tag: 'apps/shell', tagType: 'shell' },
  { id: '06', status: 'done', name: 'Micro frontend shell', sub: 'webpack 5 · module federation · host app', tag: 'apps/mfe-shell', tagType: 'mfe' },
  { id: '07', status: 'done', name: 'MFE remote — sports dashboard', sub: 'independent deploy · shared ui · module federation', tag: 'apps/sports-dashboard', tagType: 'mfe' },
  { id: '08', status: 'done', name: 'Monitoring — Sentry', sub: 'packages/monitoring · error boundary · performance', tag: 'packages/monitoring', tagType: 'pkg' },
  { id: '09', status: 'done', name: 'CI/CD + deployment', sub: 'vercel · github actions · preview urls', tag: 'infra', tagType: 'infra' },
  { id: '10', status: 'done', name: 'Backend API — Django', sub: 'django rest framework · postgresql · redis', tag: 'apps/api', tagType: 'pkg' },
  { id: '11', status: 'pending', name: 'Design system — organisms', sub: 'coming soon', tag: 'packages/ui', tagType: 'pkg' },
] as const;

const APPS = [
  { name: 'apps/shell', status: 'live', desc: 'Project hub. Roadmap, app cards, links to all deployments.', stack: ['vite', 'react 18', 'typescript'], link: 'stack-journal-shell.vercel.app' },
  { name: 'packages/ui', status: 'live', desc: 'Shared component library. Atoms + molecules + Storybook docs.', stack: ['storybook 10', 'atomic design'], link: 'stack-journal-storybook.vercel.app' },
  { name: 'apps/mfe-shell', status: 'live', desc: 'Micro frontend host. Loads remote apps at runtime via Module Federation.', stack: ['webpack 5', 'module federation'], link: 'stack-journal-mfe.vercel.app' },
  { name: 'apps/sports-dashboard', status: 'live', desc: 'Remote MFE app. Independent deploy, consumes shared UI package.', stack: ['webpack 5', 'module federation'], link: 'stack-journal-sports.vercel.app' },
  { name: 'apps/api', status: 'live', desc: 'Django REST API. Sports matches endpoint, PostgreSQL on Render.', stack: ['django', 'postgresql', 'gunicorn', 'render'], link: 'stack-journal.onrender.com' },
  { name: 'packages/monitoring', status: 'planned', desc: 'Sentry wrapper. Single config consumed by all apps.', stack: ['sentry', 'error boundary'], link: null },
] as const;

const tagStyles: Record<string, React.CSSProperties> = {
  shell: { background: 'rgba(96,165,250,0.08)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.2)' },
  mfe:   { background: 'rgba(251,191,36,0.08)',  color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)' },
  pkg:   { background: 'rgba(74,222,128,0.08)',  color: '#4ade80', border: '1px solid rgba(74,222,128,0.2)' },
  infra: { background: 'rgba(124,106,247,0.08)', color: '#7c6af7', border: '1px solid rgba(124,106,247,0.2)' },
};

const statusStyles: Record<string, React.CSSProperties> = {
  live:    { color: '#4ade80' },
  wip:     { color: '#fbbf24' },
  planned: { color: '#55536a' },
};

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{ background: '#08080e', minHeight: '100vh', color: '#e2e0f0', fontFamily: "'Syne', sans-serif" }}>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
          a { text-decoration: none; }
          .card:hover { border-color: rgba(124,106,247,0.4) !important; }
        `}</style>

        <div style={{ maxWidth: 820, margin: '0 auto', padding: '48px 28px 80px' }}>

          {/* HEADER */}
          <header style={{ marginBottom: 52 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 34, height: 34, background: '#7c6af7', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Mono', monospace", fontSize: 13, color: '#fff', fontWeight: 500 }}>SJ</div>
                <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.5 }}>
                  stack<span style={{ color: '#7c6af7' }}>-journal</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 99, fontFamily: "'DM Mono', monospace", fontSize: 11, background: 'rgba(124,106,247,0.12)', color: '#7c6af7', border: '1px solid rgba(124,106,247,0.25)' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7c6af7', animation: 'pulse 2s infinite', display: 'inline-block' }} />
                  live
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 10px', borderRadius: 99, fontFamily: "'DM Mono', monospace", fontSize: 11, background: '#0f0f18', color: '#55536a', border: '1px solid #1c1c2e' }}>v0.5.0</span>
              </div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#55536a', lineHeight: 1.8, padding: '14px 16px', background: '#0f0f18', borderRadius: 8, borderLeft: '2px solid #7c6af7' }}>
              A living full-stack portfolio. Every milestone is a real skill, every branch tells the story.<br />
              Design systems · Micro frontends · Monitoring · Backend APIs — and beyond.
            </div>
          </header>

          {/* ROADMAP */}
          <section style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3a3850', minWidth: 20 }}>01</span>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#55536a' }}>Roadmap</span>
              <span style={{ flex: 1, height: 1, background: '#1c1c2e' }} />
            </div>
            <div>
              {ROADMAP.map((ms) => (
                <div key={ms.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid #1c1c2e' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3a3850', minWidth: 20 }}>{ms.id}</span>
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 9, flexShrink: 0, fontFamily: "'DM Mono', monospace", fontWeight: 500,
                    ...(ms.status === 'done'    ? { background: '#0d2218', color: '#4ade80' } :
                        ms.status === 'active'  ? { background: 'rgba(124,106,247,0.12)', color: '#7c6af7', animation: 'pulse 2s infinite' } :
                                                  { background: '#14141f', border: '1px solid #1c1c2e', color: '#3a3850' }),
                  }}>
                    {ms.status === 'done' ? '✓' : ms.status === 'active' ? '→' : '·'}
                  </span>
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{ms.name}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#55536a' }}>{ms.sub}</div>
                  </div>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap' as const, ...tagStyles[ms.tagType] }}>
                    {ms.tag}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* APPS & PACKAGES */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3a3850', minWidth: 20 }}>02</span>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' as const, color: '#55536a' }}>Apps & Packages</span>
              <span style={{ flex: 1, height: 1, background: '#1c1c2e' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
              {APPS.map((app) => (
                <div key={app.name} className="card" style={{ background: '#0f0f18', border: '1px solid #1c1c2e', borderRadius: 10, padding: 16, display: 'flex', flexDirection: 'column', gap: 10, transition: 'border-color 0.15s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 500 }}>{app.name}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'DM Mono', monospace", fontSize: 10, ...statusStyles[app.status] }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', display: 'inline-block', ...(app.status === 'wip' ? { animation: 'pulse 2s infinite' } : {}) }} />
                      {app.status === 'live' ? 'live' : app.status === 'wip' ? 'in progress' : 'planned'}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: '#55536a', lineHeight: 1.6, textAlign: 'left' }}>{app.desc}</div>
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' as const }}>
                    {app.stack.map((s) => (
                      <span key={s} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, padding: '2px 6px', borderRadius: 4, background: '#14141f', color: '#55536a', border: '1px solid #1c1c2e' }}>{s}</span>
                    ))}
                  </div>
                  {app.link
                    ? <a href={`https://${app.link}`} target="_blank" rel="noreferrer" style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#7c6af7', marginTop: 'auto', textDecoration: 'none' }}>↗ {app.link}</a>
                    : <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3a3850', marginTop: 'auto' }}>coming soon</span>
                  }
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </ErrorBoundary>
  );
}
