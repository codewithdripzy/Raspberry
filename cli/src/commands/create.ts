import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import typescriptTemplate from "../templates/1.0.0/tsTemplate";

export async function createProject(appName: string) {
    const targetDir = path.resolve(process.cwd(), appName);

    // Check if the current directory has a raspberry.json file
    const configPath = path.join(targetDir, "raspberry.json");

    if (fs.existsSync(configPath)) {
        // prompt user about existing project
        console.log(chalk.red(`An existing Raspberry project detected in ${appName}. Would you like to continue? This may overwrite existing files.`));
        const { continueCreation } = await inquirer.prompt([
            {
                type: "confirm",
                name: "continueCreation",
                message: "Do you want to continue? y/N",
                default: false,
            },
        ]);

        if (!continueCreation) {
            console.log(chalk.yellow("Project creation aborted."));
            process.exit(0);
        }
    }

    console.log("Welcome to Raspberry! 🍓");

    console.log(chalk.blue("Choose the framework for your new Raspberry project:"));

    const { framework } = await inquirer.prompt([
        {
            type: "list",
            name: "framework",
            message: "Choose the language for your new Raspberry project:",
            choices: ["TypeScript", "JavaScript"],
            default: "TypeScript",
        },
    ]);

    const { packageManager } = await inquirer.prompt([
        {
            type: "list",
            name: "packageManager",
            message: "What package manager would you like to use?",
            choices: ["npm", "yarn", "pnpm"],
            default: "npm",
        },
    ]);

    const { autoInstallPackages } = await inquirer.prompt({
        type: "confirm",
        name: "autoInstallPackages",
        message: "Do you want to automatically install packages?",
        default: true,
    });

    const { autoRunDev } = await inquirer.prompt({
        type: "confirm",
        name: "autoRunDev",
        message: "Do you want to automatically run the development server after setup?",
        default: false,
    });

    const spinner = ora(`Creating ${appName}...`).start();

    try {
        switch (framework) {
            case "TypeScript":
                await createTypescriptProject(appName);

                if(!autoInstallPackages) {
                    console.log(chalk.green(`✅ "${appName}" created successfully!`));
                    console.log(chalk.yellow(`\nNext steps:`));
                    console.log(chalk.white(`  cd ${appName}`));
                    console.log(chalk.white(`  ${packageManager} install`));
                    console.log(chalk.white(`  ${packageManager} run dev`));
                }

                // change directory to the new project
                process.chdir(targetDir);
                
                if (autoInstallPackages) {
                    spinner.text = `Installing packages using ${packageManager}...`;

                    let installCommand = `${packageManager}${packageManager === "yarn" ? "" : " install"}`;

                    const { exec } = await import("child_process");
                    await new Promise<void>((resolve, reject) => {
                        const child = exec(installCommand, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve();
                        });
                        child.stdout?.pipe(process.stdout);
                        child.stderr?.pipe(process.stderr);
                    });

                    if (autoRunDev) {
                        spinner.text = `Starting development server using ${packageManager}...`;

                        let devCommand = `${packageManager} ${packageManager === "yarn" ? "dev" : "run dev"}`;

                        const { exec } = await import("child_process");
                        const child = exec(devCommand, (error, stdout, stderr) => {
                            if (error) {
                                console.error(`Error starting dev server: ${error.message}`);
                                return;
                            }
                        });

                        child.stdout?.pipe(process.stdout);
                        child.stderr?.pipe(process.stderr);
                        return; // exit the function to keep the dev server running
                    }

                    spinner.succeed(`Packages installed successfully using ${packageManager}, Can't wait to see what you build! 🚀`);
                }
                
                break;
            case "JavaScript":
                // await createJavascriptProject(appName);
                break;
            //         break;
        }
        spinner.succeed(`Created ${chalk.green(appName)} successfully!`);
    } catch (error) {
        spinner.fail("Failed to create project");
        console.error(error);
    }
}

export const createTypescriptProject = async (appName: string) => {
    const targetDir = path.resolve(process.cwd(), appName);

    if (fs.existsSync(targetDir)) {
        console.log(chalk.red(`❌ Directory "${appName}" already exists, please choose a different project name.`));
        process.exit(1);
    }

    const template = typescriptTemplate(appName);

    // ✅ Create all folders/files
    for (const item of template) {
        const itemPath = path.join(targetDir, item.path);
        if (item.type === "dir") {
            await fs.mkdirp(itemPath);
        } else if (item.type === "file") {
            await fs.outputFile(itemPath, item.content || "");
        }
    }
}

const createJavascriptProject = async (appName: string) => {

}