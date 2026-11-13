# Git

## Quick patch

On the source repository:

```bash
git diff > diff.patch
```

On the destination repository:

```bash
git apply diff.patch
```

## Undo the last two commits (keep changes staged)

```bash
git reset --soft HEAD~2
```

## Find the oldest merge commit from `<src>` into `<dest>`

```bash
git log --merges --first-parent <dest> --grep="Merge branch '<src>'" --oneline --reverse | head -n 1
```

## Show merges on `<branch>`

```bash
git log --date=iso --pretty=format:"%ad %h - %an : %s" --merges <branch>
```
