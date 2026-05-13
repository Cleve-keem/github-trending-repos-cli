import axios from "axios";
import type { GitHubRepo } from "../types/github.types.js";
import GitHubError from "../errors/github.error.js";

export async function githubAPI(params: {
  sinceDate: string;
  limit: number;
  language: string;
}): Promise<GitHubRepo[]> {
  const { sinceDate, limit, language } = params;

  try {
    const queryParts = [`created:>${sinceDate}`];
    if (language && language !== "all") {
      queryParts.push(`language:${language}`);
    }

    const response = await axios.get<{ items: GitHubRepo[] }>(
      "https://api.github.com/search/repositories",
      {
        params: {
          q: queryParts.join(" "),
          sort: "stars",
          order: "desc",
          per_page: limit,
        },
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );

    return response.data.items;
  } catch (error: any) {
    throw new GitHubError(
      error?.response?.data?.message ||
        "Failed to fetch repositories from GitHub API",
    );
  }
}
