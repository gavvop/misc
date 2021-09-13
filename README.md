# Miscellanea

### SSH Login without Password

**Generate public key**

```$ ssh-keygen```

**Send the key to server**

```$ ssh-copy-id -i ~/.ssh/id_rsa.pub &lt;remote-host&gt;```

**Remote login**

```$ ssh &lt;remote-host&gt;```

### Misc

**Kill Angular**

```kill $(lsof -t -i:4200)```

**PID of a process listening on port**

```lsof -i :&lt;port&gt;```

**Kill a process listening on port**
  
```fuser -k &lt;porta&gt;/tcp```

**Find all files that contains "word"**
  
```grep -r --include "*" "work" .```

**Show files sort by mod date with dimensions in GB**
  
```ls -tl --block-size=G```

**Show a file by chunks**
  
```dd if=very-big-chonky.log of=/dev/stdout bs=1024 count=1 skip=1024```

## Node

** Show NPM global links **

```npm ls -g --depth=0 --link=true```

