import { Command } from "commander";
import fetchTrendingRepos from "./services/github.service.js";
import getSinceDate from "./utils/date-fn.js";
import { error, log } from "./utils/logger.js";

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

      console.log("Trending Repositories:", repos);
    } catch (err: any) {
      log(error("Error:", err.message));
    }
  });
