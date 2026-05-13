import { log } from "node:console";
import { githubService } from "../services/github.service.js";

export default async function fetchTrendingRepos({
  sinceDate = "daily",
  limit = 10,
  language = "all",
}: {
  sinceDate: string;
  limit: number;
  language: string;
}) {
  try {
    const repos = await githubService({ sinceDate, limit, language });
    return repos;
  } catch (error: any) {
    log(
      "Error fetching trending repositories:",
      error.message || "Failed to fetch repositories from GitHub API",
    );
    throw error;
  }
}
