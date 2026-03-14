# Milestones

## milestone/01-monorepo-setup
**Status:** ✅ Complete

### What was built
- Turborepo monorepo with pnpm workspaces
- apps/shell — Vite + React 18 + TypeScript
- packages/ui, packages/utils, packages/monitoring skeletons
- GitHub Actions CI pipeline

### Key decisions
- Vite over CRA: faster dev server, better ESM support
- pnpm over npm: symlink efficiency in monorepo context

---

## milestone/02-design-system-atoms
**Status:** ✅ Complete

### What was built
- Button: variant (primary/secondary/danger/ghost), size (sm/md/lg), isLoading, icon support
- Input: label, error state, helperText
- Badge: 5 color variants
- Barrel exports via packages/ui/src/index.ts

### Key decisions
- Inline styles over CSS modules: zero config, fully portable
- TypeScript interfaces for all props

---

## milestone/03-storybook
**Status:** ✅ Complete

### What was built
- Storybook 10 with Vite builder in packages/ui
- Stories for Button, Input, Badge with autodocs
- Interactive controls for all props

### Key decisions
- Storybook in packages/ui, not in apps/shell
- autodocs tag for automatic API documentation

---

## milestone/04-design-system-molecules
**Status:** ✅ Complete

### What was built
- SearchBar: Input + Button composition, Enter key support
- AlertCard: Badge + message, dismissible variant
- Storybook stories for both molecules

### Key decisions
- Molecules consume atoms directly — no prop drilling
- onDismiss optional: AlertCard works with or without close button

---

## milestone/05-project-hub
**Status:** ✅ Complete

### What was built
- apps/shell transformed into project hub
- Roadmap section with milestone status
- Apps & Packages cards with live/wip/planned indicators
- Syne + DM Mono typography

### Key decisions
- Single page, no routing — hub only shows links to other apps
- Design system preview removed — lives in Storybook

---

## milestone/06-micro-frontend
**Status:** ✅ Complete

### What was built
- apps/mfe-shell: Webpack 5 host app (port 3000)
- apps/sports-dashboard: Webpack 5 remote app (port 3001)
- Module Federation: sports exposes SportsDashboard
- mfe-shell loads SportsDashboard at runtime

### Key decisions
- Async bootstrap pattern (index.ts → import('./bootstrap'))
  prevents eager loading issues with Module Federation
- singleton: true for React prevents dual React instance crash
- CORS headers on sports-dashboard dev server

---

## milestone/07-sentry-monitoring
**Status:** ✅ Complete

### What was built
- packages/monitoring: initSentry, ErrorBoundary, useMonitoring
- apps/shell wrapped with ErrorBoundary
- DSN loaded from environment variable

### Key decisions
- Centralized monitoring package — one config, all apps
- .env.example committed, .env gitignored
- replaysOnErrorSampleRate: 1.0 — full replay on errors only

---

## milestone/08-deployment
**Status:** 🔄 In Progress

### What will be built
- apps/shell → Vercel
- packages/ui Storybook → Vercel
- apps/mfe-shell → Vercel
- apps/sports-dashboard → Vercel
