<p align="center">
  <img src="https://raw.githubusercontent.com/codewithdripzy/raspberry/main/assets/logo.png" width="120" alt="Raspberry Logo" />
</p>

<h1 align="center">🍓 Raspberry Framework</h1>

<p align="center">
  A modern, open-source UI framework with Flutter-like syntax and React-level flexibility.  
  Build reactive, component-driven web apps with simplicity and speed.
</p>

<p align="center">
  <a href="https://github.com/<your-username>/raspberry/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/<your-username>/raspberry/ci.yml?branch=main&label=build&logo=github" alt="Build Status">
  </a>
  <a href="https://www.npmjs.com/package/raspberry">
    <img src="https://img.shields.io/npm/v/raspberry.svg?color=ff4d6d&logo=npm" alt="NPM Version">
  </a>
  <a href="https://github.com/<your-username>/raspberry/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT">
  </a>
  <a href="https://discord.gg/raspberry-dev">
    <img src="https://img.shields.io/discord/000000000000000000?label=Discord&logo=discord&logoColor=white&color=5865f2" alt="Chat on Discord">
  </a>
</p>

---

## ✨ Overview

**Raspberry** is a next-generation UI framework designed to bring **Flutter’s expressive syntax** to the **web**.  
It provides a **declarative component model**, **reactive rendering**, and a **lightweight runtime** that makes building apps fast, fun, and maintainable.

```dart
// Example: Flutter-like syntax in Raspberry
Component(
  child: Column([
    Text("Hello Raspberry 🍓"),
    Button("Click me", onClick: () => print("Pressed")),
  ]),
)
````

---

## 🚀 Features

* 🧩 **Flutter-like Syntax** — Build web apps using widget-style syntax
* ⚡ **Reactive Runtime** — Efficient, reactive updates without a virtual DOM
* 🛠 **CLI Tooling** — Create, build, and deploy projects easily
* 📦 **Monorepo Packages** — Core, CLI, Devtools, and Integrations
* 🌈 **Developer Friendly** — Fast builds, hot reload, and modular structure

---

## 🧱 Monorepo Structure

```
raspberry/
├── packages/
│   ├── core/          # Main rendering & reactivity engine
│   ├── cli/           # Raspberry CLI for project creation and management
│   ├── devtools/      # Debugging and tooling support
│   └── integrations/  # Additional renderer or framework adapters
│
├── docs/              # Documentation site
├── examples/          # Example Raspberry projects
└── scripts/           # Build and release scripts
```

---

## 🧰 Installation

To install the Raspberry CLI globally:

```bash
npm install -g raspberry-cli
```

Then, create a new project:

```bash
raspberry create my-app
cd my-app
raspberry dev
```

---

## 🧑‍💻 Contributing

We love contributions! ❤️
Whether it’s fixing bugs, improving docs, or adding new features — your help makes Raspberry better.

* Read the [Contributing Guide](./CONTRIBUTING.md)
* Follow our [Code of Conduct](./CODE_OF_CONDUCT.md)
* Report issues or request features in [GitHub Issues](https://github.com/<your-username>/raspberry/issues)

---

## 🔒 Security

If you discover a vulnerability, please read our [Security Policy](./SECURITY.md) for responsible disclosure guidelines.

---

## 📚 Documentation

Official documentation is available at:
👉 [https://raspberry.dev/docs](https://raspberry.dev/docs)

---

## 🧠 Philosophy

Raspberry is built on a simple idea —

> “Building interfaces should feel natural, not noisy.”

We aim to combine the **expressiveness of Flutter** with the **flexibility of React**, enabling developers to craft reactive experiences with elegance and speed.

---

## 🧑‍🤝‍🧑 Community

Join the conversation and be part of the Raspberry ecosystem:

* 💬 [Discord](https://discord.gg/raspberry-dev)
* 🐦 [Twitter/X](https://x.com/raspberrydev)
* 🌐 [Website](https://raspberry.dev)

---

## ⚖️ License

Raspberry is open-source software licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more information.

---

<p align="center">Built with ❤️ by the Raspberry community.</p>
