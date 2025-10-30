interface TemplateItem {
  path: string;
  type: "file" | "dir";
  content?: string;
}

function typescriptTemplate(appName: string): TemplateItem[] {
  const template: TemplateItem[] = [
    { path: "assets", type: "dir" },
    { path: "test", type: "dir" },
    { path: "src", type: "dir" },

    // Main entry file
    {
      path: "src/main.ts",
      type: "file",
      content: `import { App, Component, Text } from "raspberry";

const home = new App({
  root: Component({
    child: Text("🍓 Hello from ${appName}!"),
  }),
});
`,
    },

    // Raspberry project config
    {
      path: "raspberry.json",
      type: "file",
      content: JSON.stringify(
        {
          name: appName,
          description: "A Raspberry project",
          version: "1.0.0",
        },
        null,
        2
      ),
    },

    // Git ignore file
    {
      path: ".gitignore",
      type: "file",
      content: `# Dependencies
node_modules

# Build output
lib
dist

# Env and system files
.env
.DS_Store

# Logs
*.log
`,
    },

    // App-specific TS config
    {
      path: "tsconfig.app.json",
      type: "file",
      content: `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "rootDir": "src",
    "outDir": "lib",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
`,
    },

    // Node-specific TS config (for CLI/build tools)
    {
      path: "tsconfig.node.json",
      type: "file",
      content: `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "outDir": "lib",
    "rootDir": "src",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`,
    },

    // Root TS config
    {
      path: "tsconfig.json",
      type: "file",
      content: `{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "composite": true,
    "declaration": true
  },
  "include": ["src", "test"]
}
`,
    },

    // Package.json
    {
      path: "package.json",
      type: "file",
      content: JSON.stringify(
        {
          name: appName,
          version: "1.0.0",
          description: "A Raspberry project",
          main: "lib/main.js",
          type: "module",
          scripts: {
            build: "raspberry build",
            start: "raspberry start",
            dev: "raspberry dev",
          },
          dependencies: {
            raspberry: "latest",
          },
          devDependencies: {
            typescript: "^5.6.0",
            "ts-node": "^10.9.2",
          },
        },
        null,
        2
      ),
    },

    // README
    {
      path: "README.md",
      type: "file",
      content: `# ${appName}

Welcome to **${appName}**, built with the 🍓 **Raspberry Framework**!

## 🚀 Getting Started

### 1️⃣ Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2️⃣ Start Development
\`\`\`bash
npm run dev
\`\`\`

### 3️⃣ Build for Production
\`\`\`bash
npm run build
\`\`\`

## 🧠 Project Overview
This project uses **Raspberry**, a modern, open-source UI framework with Flutter-like syntax and React-level flexibility.

---

**Made with ❤️ by the Raspberry community**
`,
    },
  ];

  return template;
}

export default typescriptTemplate;
