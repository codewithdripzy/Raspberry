import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";

export async function buildProject() {
  const spinner = ora("Building project...").start();

  try {
    await new Promise((r) => setTimeout(r, 2000)); // Simulate build
    await fs.mkdirp("dist");
    await fs.writeFile("dist/app.js", "console.log('Raspberry app built!');");
    spinner.succeed(chalk.green("Build complete! 🍓"));
  } catch (err) {
    spinner.fail("Build failed");
    console.error(err);
  }
}
