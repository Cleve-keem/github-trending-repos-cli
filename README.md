# GitHub Trending Repos CLI

A simple command-line tool to fetch and display trending GitHub repositories using GitHub Search API filters for duration, language, and result limit.

## Inspiration

This project is inspired by the [Github-Trending-CLI](https://roadmap.sh/projects/github-trending-cli) from roadmap.sh.

## Features

- Query GitHub repositories sorted by stars
- Filter by creation date range: `day`, `week`,`month` or `year`
- Filter by programming language
- Limit the number of results returned
- View output in a clean table format

## Install

```bash
pnpm install
```

> The project is written in TypeScript and runs with `tsx` for development.

## Usage

Run the CLI with the available options:

```bash
pnpm dev -- -d <duration> -L <language> -l <limit>
```

### Options

- `-d, --duration <duration>`: `day | week | month | year` (default: `week`)
- `-L, --language <language>`: programming language filter (default: `all`)
- `-l, --limit <number>`: number of repositories to return (default: `10`)

### Example

Fetch the top 3 trending TypeScript repositories created in the last week:

```bash
pnpm dev -- -d week -L ts -l 3
```

Fetch the top 5 trending repositories across all languages created within the past day:

```bash
pnpm dev -- -d day -l 5
```

## How it works

The CLI builds a GitHub search query using:

- `created:>DATE` to filter repositories by creation date
- `language:LANGUAGE` when a language is provided
- `sort=stars&order=desc` to return the most-starred results

The tool uses `axios` to request GitHub Search API and renders results in a table.

## Development

Start the CLI locally with:

```bash
pnpm dev -- -d week -L js -l 10
```

## Project structure

- `src/cli.ts` — command-line options and output formatting
- `src/index.ts` — CLI entry point
- `src/commands/trending.command.ts` — trending repository fetch logic
- `src/services/github.service.ts` — GitHub API integration
- `src/utils/formatter.ts` — helper functions

## License

This project is licensed under `ISC`.
