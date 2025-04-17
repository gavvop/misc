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

## Take the first merge commit from \<SRC\> to \<DEST\> 

```
git log --merges --first-parent <DEST> --grep="Merge branch '<SRC>'" --oneline --reverse | head -n 1
```
