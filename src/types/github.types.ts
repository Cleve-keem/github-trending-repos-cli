export interface GitHubRepo {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  language: string | null;
  description: string | null;
  html_url: string;
}

export interface FormattedRepo {
  name: string;
  owner: string;
  stars: number;
  language: string;
  description: string;
  url: string;
}
