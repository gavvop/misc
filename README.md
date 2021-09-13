# Miscellanea

### SSH Login without Password

**Generate public key**

```ssh-keygen```

**Send the key to server**

```ssh-copy-id -i ~/.ssh/id_rsa.pub <remote-host>```

**Remote login**

```ssh <remote-host>```

### Misc

**Kill Angular**

```kill $(lsof -t -i:4200)```

**PID of a process listening on port**

```lsof -i :<port>```

**Kill a process listening on port**
  
```fuser -k <porta>/tcp```

**Find all files that contains "word"**
  
```grep -r --include "*" "word" .```

**Show files sort by mod date with dimensions in GB**
  
```ls -tl --block-size=G```

**Show a file by chunks**
  
```dd if=very-big-chonky.log of=/dev/stdout bs=1024 count=1 skip=1024```

## Node

**Show NPM global links**

```npm ls -g --depth=0 --link=true```

### Link a local library

**unlink the old version**

```cd <library-path> && npm unlink .```

**library build**

```npm run build```

**go into the dist**

```cd dist/<company>/<project>/```

**link the library globally**

```npm link .```

**link the library in the main project**

```npm link <company>/<project>```

Make sure that your main project is linking the local library checking the node_modules/ dep
