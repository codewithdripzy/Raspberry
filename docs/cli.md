# Raspberry CLI — Reference

The `raspberry` CLI (implemented in `packages/cli`) is the recommended developer interface for scaffolding and running Raspberry apps.

Available commands

- `raspberry create <app-name>`
  - Scaffolds a new project using a template (TypeScript by default).
  - Prompts for package manager, whether to auto-install dependencies, and whether to auto-run the dev server.
  - Template source: `packages/cli/src/templates/1.0.0/tsTemplate.ts`

- `raspberry serve`
  - Runs a simple development server (HTTP server on port 3000 by default).
  - Implementation: `packages/cli/src/commands/serve.ts` (simple node http server placeholder).

- `raspberry build`
  - Runs a build pipeline for a Raspberry app. Current implementation is a simulated build that writes `dist/app.js`.
  - Implementation: `packages/cli/src/commands/build.ts` (placeholder spinner + file output).

Developer notes

- The CLI is implemented using `commander` and exposes commands in `packages/cli/src/index.ts`.
- Creating TypeScript projects uses the `tsTemplate` which contains `src/main.ts`, `raspberry.json`, `tsconfig` files, and a `README.md`.
- The `create` command uses `inquirer` for interactive prompts and optionally runs the package manager to install dependencies.

Extending the CLI

- Add generators for widgets: `raspberry generate <widget-name>` (not implemented yet). A generator would create files under `src/widgets` and register them in an example app template.
- Replace the placeholder `serve` and `build` with integrations for Vite or Rollup for production-ready builds and HMR.
