import { githubAPI } from "../apis/github.api.js";
import getSinceDate from "../utils/date.utils.js";
import { formatRepository } from "../utils/formatter.js";
import validateDuration from "../utils/validator.js";

export default async function fetchTrendingRepos({
  sinceDate = "week",
  limit = 10,
  language = "all",
}: {
  sinceDate: string;
  limit: number;
  language: string;
}) {
  validateDuration(sinceDate);
  const formattedDate = getSinceDate(sinceDate);
  const repository = await githubAPI({
    sinceDate: formattedDate,
    limit,
    language,
  });

  return formatRepository(repository);
}
