export default class GitHubError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = "GitHubAPIError";
  }
}
