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

## Take the oldest merge commit from \<SRC\> to \<DEST\> 

```
git log --merges --first-parent <DEST> --grep="Merge branch '<SRC>'" --oneline --reverse | head -n 1
```


## Show merge for \<BRANCH\> 

```
git log --date=iso --pretty=format:"%ad %h - %an : %s" --merges <BRANCH>
```
