# Miscellanea

Personal collection of cheatsheets, config files and small scripts.

## Cheatsheets

| File | Topic |
| --- | --- |
| [shell.md](cheatsheets/shell.md) | Processes, ports, files (Linux / Windows) |
| [git.md](cheatsheets/git.md) | Git |
| [docker.md](cheatsheets/docker.md) | Docker |
| [kubernetes.md](cheatsheets/kubernetes.md) | Kubernetes (`kubectl`) |
| [node.md](cheatsheets/node.md) | Node.js / npm |
| [postgresql.md](cheatsheets/postgresql.md) | PostgreSQL (`psql`) |
| [ssh.md](cheatsheets/ssh.md) | SSH |
| [nginx.md](cheatsheets/nginx.md) | nginx |

## Configs

| File | Description |
| --- | --- |
| [configs/nginx/angular-spa.conf](configs/nginx/angular-spa.conf) | nginx server block for serving an Angular SPA |
| [configs/vscode/settings.json](configs/vscode/settings.json) | VS Code user settings |

## Scripts

| File | Description |
| --- | --- |
| [scripts/node/generate-jwks.mjs](scripts/node/generate-jwks.mjs) | Generate an RS256 key pair and export it as a JWKS file |

## Conventions

- One file per topic, in English.
- `#` title, `##` sections, one command per fenced code block with a language tag.
- Placeholders are written as `<name>`.
