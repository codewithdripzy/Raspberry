# Raspberry — Project Overview

Raspberry is a modern UI framework aiming to bring Flutter-like declarative syntax and a widget tree to the web. This repository is organized as a monorepo with separate packages for the runtime/core, CLI tooling, and UI components.

Key ideas

- Declarative widget tree inspired by Flutter (composition over inheritance).
- A small runtime that reconciles widget trees to DOM or alternative renderers.
- Developer tooling (CLI) to scaffold, serve, and build projects quickly.

Monorepo layout

```
raspberry/
├── packages/
│   ├── core/          # (planned) core runtime / reconciliation engine
│   ├── ui/            # component packages & widgets (this repo contains a lightweight UI package)
│   └── cli/           # CLI tooling used to scaffold and run apps
├── docs/              # Generated documentation (this folder)
└── examples/          # Example projects and templates
```

Goals for the project

- Provide a small, testable runtime for expressing UI as nested Widgets.
- Offer a `raspberry-cli` for developer workflows: create, serve, build, generate.
- Keep the core small and allow multiple renderers (DOM, Canvas, WebGL) to be implemented.

Where to start

- CLI: `packages/cli` contains a working CLI with `create`, `serve`, and `build` commands. Use `raspberry create <app-name>` to scaffold an example app.
- UI package: `packages/ui` contains minimal Widget base classes and an example `WebApplication`.
- Add a TypeScript-aware editor and run the provided scripts for dev/build in each package.

Next steps

- Implement and polish `raspberry-core` with reconciliation and renderer adapters.
- Expand `packages/ui` with layout, text, and interaction widgets.
- Add CI, docs site generation, and integration tests.
