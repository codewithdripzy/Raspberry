function typescriptTemplate(appName: string) {
  // console.log('🍓 Welcome to Raspberry!');
  const template = [
    { path: "assets", type: "dir" },
    { path: "test", type: "dir" },
    { path: "src", type: "dir" },
    {
      path: "src/main.ts",
      type: "file",
      content: ``,
    },
    {
      path: "raspberry.json",
      type: "file",
      content: `{
  "name": "${appName}",
  "description": "A Raspberry project",
  "version": "1.0.0"
}
`,
    },
    {
      path: ".gitignore",
      type: "file",
      content: `node_modules
lib
dist
.env
`,
    },
    {
      path: "tsconfig.app.json",
      type: "file",
      content: `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "lib",
    "rootDir": "src",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`,
    },
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
    "strict": true
  },
  "include": ["src"]
}
`,
    },
    {
      path: "tsconfig.json",
      type: "file",
      content: `{
  "extends": "./tsconfig.app.json",
  "compilerOptions": {
    "composite": true,
    "declaration": true
  },
  "include": ["src", "test"]
}
`,
    },
    {
      path: "package.json",
      type: "file",
      content: `{
  "name": "${appName}",
  "version": "1.0.0",
  "main": "lib/index.js",
  "scripts": {
    "build": "raspberry build",
    "start": "raspberry start",
    "dev": "raspberry dev"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.0.0",
    "ts-node": "^10.0.0"
  }
}
`,
    },
    {
      path: "README.md",
      type: "file",
      content: `# ${appName}

Welcome to **${appName}**, a project built with Raspberry!

## Description

${appName} is a Raspberry project designed to help you get started quickly with TypeScript and modern development tools.

## Features

- TypeScript support
- Pre-configured build scripts
- Development and production modes

## Getting Started

### Installation

1. Install Raspberry CLI:
   \`\`\`bash
   npm i -g raspberry-cli
   \`\`\`

2. Create a new Raspberry project:
   \`\`\`bash
   raspberry create ${appName}
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Scripts

- \`npm run build\`: Build the project.
- \`npm run start\`: Start the project.
- \`npm run dev\`: Start the project in development mode.

## License

This project is licensed under the MIT License.
`,
    },
  ];

  return template;
}

export default typescriptTemplate;