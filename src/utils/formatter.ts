import type { FormattedRepo, GitHubRepo } from "../types/github.types.js";

export function formatRepository(repos: GitHubRepo[]): FormattedRepo[] {
  return repos.map((repo) => ({
    name: repo.name,
    owner: repo.owner.login,
    stars: repo.stargazers_count,
    language: repo.language ?? "Unknown",
    description: truncate(repo.description ?? "No description"),
    url: repo.html_url,
  }));
}

export function truncate(text: string, max = 50) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}
