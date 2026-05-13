import { githubAPI } from "../apis/github.api.js";
import getSinceDate from "../utils/date-fn.js";
import { formatRepository } from "../utils/formatter.js";

export default async function fetchTrendingRepos({
  sinceDate = "week",
  limit = 10,
  language = "all",
}: {
  sinceDate: string;
  limit: number;
  language: string;
}) {
  const formattedDate = getSinceDate(sinceDate);
  const repository = await githubAPI({
    sinceDate: formattedDate!,
    limit,
    language,
  });

  return formatRepository(repository);
}
