# 🍓 Raspberry CLI  
> The official CLI for managing and building **Raspberry** framework projects.  
> *Simple. Fast. Developer-first.*

---

<div align="center">

[![npm version](https://img.shields.io/npm/v/raspberry-cli.svg?color=ff3c67&style=flat-square)](https://www.npmjs.com/package/raspberry-cli)
[![License: ISC](https://img.shields.io/badge/License-ISC-brightgreen.svg?style=flat-square)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/codewithdripzy/raspberry-cli/ci.yml?label=CI&style=flat-square)](https://github.com/codewithdripzy/raspberry-cli/actions)
[![Coverage](https://img.shields.io/codecov/c/github/codewithdripzy/raspberry-cli?style=flat-square&color=yellow)](https://codecov.io/gh/codewithdripzy/raspberry-cli)
[![Made with ❤️ by thecodeguyy](https://img.shields.io/badge/made%20with-%E2%9D%A4%EF%B8%8F-ff3c67?style=flat-square)](https://github.com/codewithdripzy)

</div>

---

## 🚀 Overview

`raspberry-cli` is a tiny but powerful command-line tool built for the [**Raspberry Framework**](https://github.com/codewithdripzy/Raspberry).  
It helps you **create**, **build**, and **serve** Raspberry projects effortlessly — all from your terminal.

---

## 📦 Package Info

| Property | Value |
|-----------|--------|
| **Name** | `raspberry-cli` |
| **Version** | `1.0.1` |
| **License** | ISC |
| **Language** | TypeScript |
| **Runtime** | Node.js |

---

## ⚙️ Installation

### 🔹 Global Install

```bash
npm install -g raspberry-cli
# or
pnpm add -g raspberry-cli
````

Now you can use the `raspberry` command anywhere 🎉

### 🔹 Local Development

```bash
# clone and setup
git clone https://github.com/codewithdripzy/raspberry-cli.git
cd raspberry-cli
pnpm install

# run in dev mode
pnpm run dev
```

---

## ⚡ Quick Start

Create a new project interactively:

```bash
raspberry create my-app
```

Build your project:

```bash
raspberry build
```

Run it locally:

```bash
raspberry serve
```

---

## 🧠 Example Scripts

You can also wire commands directly into your project’s `package.json`:

```json
{
  "scripts": {
    "build": "raspberry build",
    "start": "raspberry start",
    "dev": "raspberry dev"
  }
}
```

---

## 🧩 Commands

| Command  | Description                                        |
| -------- | -------------------------------------------------- |
| `create` | Scaffold a new project from a template.            |
| `build`  | Compile TypeScript and prepare a production build. |
| `serve`  | Run a local development server.                    |

**Example usage:**

```bash
raspberry create my-project --template 1.0.0
raspberry build --out dist
raspberry serve --port 3000
```

---

## 🎨 Templates

Templates are located in `src/templates`.
The default **1.0.0** template includes both TypeScript and JavaScript variants:

* `src/templates/1.0.0/tsTemplate.ts` → TypeScript
* `src/templates/1.0.0/js/` → JavaScript

---

## 🧑‍💻 Development

The CLI is TypeScript-based and built for Node.js.

**Common commands:**

```bash
pnpm install          # install dependencies
pnpm run dev          # start in dev mode
pnpm run build        # compile TypeScript
```

**Recommended workflow:**

1. Fork & create a feature branch
2. `pnpm install && pnpm run dev`
3. Add tests if possible
4. Submit a PR with a clear description

---

## 🤝 Contributing

Pull requests, ideas, and discussions are **highly welcome**!
Before contributing:

* Keep PRs small & focused.
* Ensure the build passes.
* Add/update relevant tests.

Join discussions or open issues on [GitHub Discussions](https://github.com/codewithdripzy/Raspberry/discussions).

---

## 🧩 Example App

A sample Raspberry project lives in `tests/myapp`.

Try it out:

```bash
pnpm link --global
cd tests/myapp
pnpm install
pnpm run dev
```

Or directly run the CLI with `ts-node`:

```bash
node -r ts-node/register src/index.ts create example-app
```

---

## 🩵 Troubleshooting

* **Command not found?** → Ensure global npm/pnpm bin is in your `$PATH`.
* **Build errors?** → Run `pnpm run build` for compiler diagnostics.

---

## 🪪 License

This project is licensed under the **ISC License**.
See [LICENSE](./LICENSE) for details.

---

<div align="center">
  <sub>🍓 Built with <strong>love</strong> for developers, by developers.</sub><br/>
  <sub>Follow <a href="https://github.com/codewithdripzy">@codewithdripzy</a> for updates!</sub>
</div>