interface TemplateItem {
  path: string;
  type: "file" | "dir";
  content?: string;
}

function typescriptTemplate(appName: string): TemplateItem[] {
  const template: TemplateItem[] = [
    { path: "src", type: "dir" },
    { path: "public", type: "dir" },

    // Main entry file
    {
      path: "src/main.ts",
      type: "file",
      content: `import { 
  Scaffold, 
  Center, 
  Container, 
  Column, 
  Text, 
  runApp, 
  StatelessWidget 
} from "raspberry";

class MyApp extends StatelessWidget {
  build() {
    return Scaffold({
      backgroundColor: "#f8fafc",
      body: Center({
        child: Container({
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
          child: Column({
            gap: "16px",
            crossAxisAlignment: "center",
            children: [
              Text({ 
                text: "🍓 Hello from ${appName}!", 
                fontSize: "28px", 
                fontWeight: "bold" 
              }),
              Text({ 
                text: "Built with the Raspberry Framework",
                color: "#64748b" 
              }),
              Container({
                padding: "12px 24px",
                backgroundColor: "#38BDF8",
                borderRadius: "8px",
                child: Text({ text: "Get Started", color: "white", fontWeight: "600" })
              })
            ]
          })
        })
      })
    });
  }
}

const appRoot = document.getElementById("app");
if (appRoot) {
  runApp(new MyApp(), appRoot);
}
`,
    },

    // index.html
    {
      path: "index.html",
      type: "file",
      content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName}</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
</body>
</html>
`,
    },

    // .gitignore
    {
      path: ".gitignore",
      type: "file",
      content: `node_modules
dist
.DS_Store
*.log
`,
    },

    // tsconfig.json
    {
      path: "tsconfig.json",
      type: "file",
      content: `{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
`,
    },

    // package.json
    {
      path: "package.json",
      type: "file",
      content: JSON.stringify(
        {
          name: appName,
          private: true,
          version: "0.1.0",
          type: "module",
          scripts: {
            "dev": "raspberry serve",
            "build": "raspberry build",
            "preview": "vite preview"
          },
          dependencies: {
            "raspberry": "latest"
          },
          devDependencies: {
            "typescript": "^5.0.0",
            "vite": "^6.0.0"
          }
        },
        null,
        2
      ),
    },
  ];

  return template;
}

export default typescriptTemplate;
