import axios from "axios";

export async function githubService(params: {
  sinceDate: string;
  limit: number;
  language: string;
}) {
  const { sinceDate, limit, language } = params;

  try {
    const queryParts = [`created:>${sinceDate}`];

    if (language && language !== "all") {
      queryParts.push(`language:${language}`);
    }

    const response = await axios.get(
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
    throw new Error(
      error?.response?.data?.message ||
        "Failed to fetch repositories from GitHub API",
    );
  }
}
