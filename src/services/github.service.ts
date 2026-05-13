import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchTrendingRepos(params: {
  sinceDate: string;
  limit: number;
}) {
  const { sinceDate, limit } = params;

  try {
    const response = await axios.get(`${BASE_URL}/search/repositories`, {
      params: {
        q: `created:>${sinceDate}`,
        sort: "stars",
        order: "desc",
        per_page: limit,
      },
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    return response.data.items;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        "Failed to fetch repositories from GitHub API",
    );
  }
}
