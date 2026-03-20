import chalk from "chalk";
import { spawn } from "child_process";

export async function serveProject() {
  console.log(chalk.blue(`🍓 Launching Raspberry development server...`));

  const devServer = spawn("npm", ["run", "dev"], {
    stdio: "inherit",
    shell: true
  });

  devServer.on("error", (err: Error) => {
    console.error(chalk.red(`Failed to start development server: ${err.message}`));
  });

  devServer.on("close", (code: number) => {
    if (code !== 0) {
      console.log(chalk.red(`Dev server exited with code ${code}`));
    }
  });
}

