# Architecture Decision Log

## ADR-001: Monorepo with Turborepo
**Date:** 2025-03-01
**Status:** Accepted

### Context
stack-journal is a living portfolio covering full-stack skills.
Multiple apps and shared packages need coordinated builds.

### Decision
Turborepo + pnpm workspaces.

### Consequences
- All packages share a single version control history
- Build cache speeds up CI
- pnpm required (documented in CONTRIBUTING.md)

---

## ADR-002: Vite for apps/shell, Webpack 5 for MFE apps
**Date:** 2025-03-01
**Status:** Accepted

### Context
apps/shell is a simple showcase app. MFE apps require
Module Federation which is a Webpack 5 feature.

### Decision
- apps/shell → Vite (fast dev server, simple config)
- apps/mfe-shell + apps/sports-dashboard → Webpack 5 (Module Federation)

### Consequences
- Different build tools per app, but fully isolated
- Turborepo manages both seamlessly

---

## ADR-003: packages/monitoring as Sentry wrapper
**Date:** 2025-03-01
**Status:** Accepted

### Context
Multiple apps need monitoring. Duplicating Sentry config is error-prone.

### Decision
Centralize Sentry init, ErrorBoundary and useMonitoring hook
in packages/monitoring. All apps consume this package.

### Consequences
- Single source of truth for monitoring config
- Easy to swap monitoring provider in the future
