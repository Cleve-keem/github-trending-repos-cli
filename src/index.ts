import { Command } from "commander";
import { log, success } from "./utils/logger.js";
import { fetchTrendingRepos } from "./services/github.service.js";
import getSinceDate from "./utils/formatter.js";

const program = new Command();
program
  .name("trending-repos")
  .description("Fetch trending GitHub repositories by duration and language")
  .version("1.0.0");

program
  .command("trending-repos")
  .description("Commads related to expense tracking");

program
  .option(
    "-d, --duration <duration>",
    "Duration to fetch trending repositories (daily, weekly, monthly)",
    "daily",
  )
  .option(
    "-L, --language <language>",
    "Programming language to filter trending repositories",
    "all",
  )
  .option(
    "-l, --limit <number>",
    "Number of trending repositories to fetch",
    "10",
  )
  .action((options) => {
    log("Fetching trending repositories...");
    const { duration, language, limit } = options;
    const response = fetchTrendingRepos({ sinceDate: getSinceDate(duration) as string, limit: parseInt(limit) });
    response
      .then((repos) => {
        success(`Top ${limit} trending repositories (${duration})${language !== "all" ? ` in ${language}` : ""}:`);
        repos.forEach((repo: any, index: number) => {
          log(`${index + 1}. ${repo.full_name} - ⭐ ${repo.stargazers_count}`);
        });
      })
      .catch((error) => {
        log(`Error fetching trending repositories: ${error.message}`);
      });
  })
  .parse(process.argv);
