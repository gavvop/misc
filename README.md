# Miscellanea

**Kill Angular**

```kill $(lsof -t -i:4200)```

**PID of a process listening on port**

```lsof -i :<port>```

**(same on Windows)**
 ```Get-NetTCPConnection | Where-Object LocalPort -eq <port> | ForEach-Object { Get-Process -Id $_.OwningProcess } | Stop-Process```

**Kill a process listening on port**
  
```fuser -k <porta>/tcp```

**Find all files that contains "word"**
  
```grep -r --include "*" "word" .```

**Show files sort by mod date with dimensions in GB**
  
```ls -tl --block-size=G```

**Show a file by chunks**
  
```dd if=very-big-chonky.log of=/dev/stdout bs=1024 count=1 skip=1024```
