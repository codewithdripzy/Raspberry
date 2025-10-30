#!/usr/bin/env node
import chalk from "chalk";
import { Command } from "commander";
import { createProject } from "./commands/create";
import { buildProject } from "./commands/build";
import { serveProject } from "./commands/serve";

const program = new Command();

program.name("raspberry").description("🍓 Raspberry CLI — Build Beautiful and Faster Web Apps").version("1.0.0");

// CREATE
program.command("create <app-name>").description("Create a new Raspberry project").action(createProject);

// BUILD
program.command("build").description("Build your Raspberry project for production").action(buildProject);

// SERVE
program.command("serve").description("Run your Raspberry app locally").action(serveProject);

program.parse(process.argv);
