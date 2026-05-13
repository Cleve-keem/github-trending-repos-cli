export interface GitHubRepo {
  full_name: string;
  name: string;
  stargazers_count: number;
  language: string | null;
  description: string | null;
  html_url: string;
}

export interface FormattedRepo {
  name: string;
  owner: string;
  stars: number;
  language: string | null;
  description: string | null;
  url: string;
}
