import ora from "ora";
import chalk from "chalk";
import { execSync } from "child_process";

export async function buildProject() {
  const spinner = ora("Building your Raspberry project for production...").start();

  try {
    // Run the native vite build through the project's scripts
    execSync("npm run build", { stdio: "ignore" });
    spinner.succeed(chalk.green("Build complete! 🍓 Your project is ready in /dist"));
  } catch (err) {
    spinner.fail(chalk.red("Build failed."));
    console.error(err);
  }
}
