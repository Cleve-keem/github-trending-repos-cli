import { Command } from "commander";
import fetchTrendingRepos from "./commands/trending.command.js";
import getSinceDate from "./utils/formatter.js";

export const program = new Command();

program
  .name("trending-repos")
  .description("Fetch trending GitHub repositories")
  .version("1.0.0");

program
  .option("-d, --duration <duration>", "day | week | month | year", "week")
  .option("-L, --language <language>", "programming language", "all")
  .option("-l, --limit <number>", "number of repos", "10")

  .action(async (options) => {
    const { duration, language, limit } = options;

    try {
      const repos = await fetchTrendingRepos({
        sinceDate: getSinceDate(duration) as string,
        limit: Number(limit),
        language,
      });

      console.log(repos);

      console.table(
        repos.map((repo: any) => ({
          Repository_name: repo.name,
          Owner: repo.full_name,
          Stars: `⭐ ${repo.stargazers_count}`,
          Description: repo.description,
          URL: repo.html_url,
          language: repo.language,
        })),
      );
    } catch (err: any) {
      console.error("Error:", err.message);
    }
  });
