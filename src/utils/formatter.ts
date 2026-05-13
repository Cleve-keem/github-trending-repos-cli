import type { FormattedRepo, GitHubRepo } from "../types/github.types.js";

export function formatRepository(repos: GitHubRepo[]): FormattedRepo[] {
  return repos.map((repo) => ({
    name: repo.name,
    owner: repo.full_name.split("/")[0] ?? "Unknown",
    stars: repo.stargazers_count,
    language: repo.language ?? "Unknown",
    description: repo.description ?? "No description",
    url: repo.html_url,
  }));
}
