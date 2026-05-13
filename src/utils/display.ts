import type { FormattedRepo } from "../types/github.types.js";
import Table from "cli-table3";
import chalk from "chalk";

export default function displayRepository(repos: FormattedRepo[]) {
  const table = new Table({
    head: [
      chalk.cyan("📦 Repository"),
      chalk.cyan("👤 Owner"),
      chalk.cyan("⭐ Stars"),
      chalk.cyan("Language"),
      chalk.cyan("Description"),
      chalk.cyan("🔗 URL"),
    ],
  });

  table.push(
    ...repos.map((repo) => [
      chalk.green(repo.name),
      chalk.blue(repo.owner),
      chalk.yellow(repo.stars),
      chalk.magenta(repo.language),
      chalk.white(repo.description),
      chalk.underline(chalk.blue(repo.url)),
    ]),
  );

  console.log(table.toString());
}
