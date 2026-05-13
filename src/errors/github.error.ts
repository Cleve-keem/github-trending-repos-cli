export default class GitHubError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GitHubAPIError";
  }
}
