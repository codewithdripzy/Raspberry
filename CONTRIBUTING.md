# Contributing to Raspberry 🍓

Thank you for your interest in contributing to **Raspberry** — a modern, open-source UI framework with Flutter-like syntax and React-level flexibility. 

Every contribution matters, from fixing typos to building new compiler features. Let’s build something beautiful together.


## 🧭 Getting Started

### 1. Fork and Clone

Start by forking the repository and cloning your fork:
```bash
git clone https://github.com/codewithdripzy/Raspberry.git
cd raspberry
````

### 2. Install Dependencies

We use **pnpm** for package management:

```bash
pnpm install
```

### 3. Start Development

If you’re working on the core or CLI:

```bash
pnpm dev
```

For docs:

```bash
cd docs
pnpm dev
```

To test a package:

```bash
cd packages/core
pnpm test
```


## 🧱 Project Structure

Raspberry is organized as a **monorepo** using **Turborepo**:

```
raspberry/
├── packages/
│   ├── core/          # The main runtime and renderer
│   ├── cli/           # The Raspberry CLI tool
│   ├── devtools/      # Debugging & development tools
│   └── integrations/  # Framework adapters and plugins
│
├── docs/              # Documentation site (Next.js / Docusaurus)
├── examples/          # Example apps & usage demos
├── scripts/           # Release & build scripts
├── turbo.json         # Turborepo configuration
├── package.json       # Root dependencies & scripts
└── README.md
```

---

## 💡 How You Can Contribute

There are many ways to help improve Raspberry:

* 🐛 **Report bugs** via GitHub Issues
* ✨ **Suggest new features** or improvements
* 🧰 **Improve or refactor code**
* 📖 **Enhance documentation or examples**
* 🧪 **Add or fix tests**

---

## 🧑‍💻 Code Style

* Follow the existing file and folder structure
* Format your code using **Prettier**

  ```bash
  pnpm format
  ```
* Run the linter before committing:

  ```bash
  pnpm lint
  ```
* Keep your commits **atomic** and **clear**
* Follow [Conventional Commits](https://www.conventionalcommits.org/):

  ```
  feat(core): add reactive context system
  fix(cli): resolve template generation issue
  docs: update setup guide
  ```

---

## 🧪 Testing

Run all tests:

```bash
pnpm test
```

Run tests for a specific package:

```bash
cd packages/core
pnpm test
```

Make sure tests pass before opening a PR.

---

## 🔀 Pull Request Guidelines

1. Create a new branch for your changes:

   ```bash
   git checkout -b feat/new-feature
   ```
2. Make your changes and commit using conventional messages.
3. Push your branch and open a PR against the `main` branch.
4. Describe **what** and **why** you changed something.
5. Link related issues if applicable.

We’ll review your PR as soon as possible 🚀

---

## 💬 Community & Discussions

Join the conversation in the **GitHub Discussions** tab.
We value respectful, inclusive communication. Let’s make Raspberry a great place to learn, build, and grow.

---

## ⚖️ License

By contributing to this repository, you agree that your contributions will be licensed under the same license as the project — **MIT License**.

---

**Thank you for helping shape Raspberry!** 🍓

```

---

Would you like me to also generate a matching **`CODE_OF_CONDUCT.md`** to complement this (for community behavior and standards)? It’s highly recommended for open-source repos.
```
