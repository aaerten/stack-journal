# Contributing to stack-journal

## Prerequisites
- Node.js 20+
- pnpm 9+

## Setup
```bash
git clone https://github.com/aaerten/stack-journal.git
cd stack-journal
pnpm install
pnpm dev
```

## Branch Convention
All work happens on milestone branches:
```
milestone/XX-description
```

## Commit Convention
```
feat(scope): short description

- detail 1
- detail 2
```

## PR Checklist
- [ ] MILESTONES.md updated
- [ ] ARCHITECTURE.md updated (if architectural decision made)
- [ ] Storybook story added (if UI component added)
- [ ] No console.log left behind
- [ ] .env secrets never committed

## Environment Variables
Copy `.env.example` to `.env` and fill in values.
Never commit `.env` files.
