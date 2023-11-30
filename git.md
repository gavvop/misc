# Git

## Quickly patch

On source

```
git diff > diff.patch
```

On destination

```
git apply diff.patch
```

## Go back last two commit

```
git reset --soft HEAD~2
```
