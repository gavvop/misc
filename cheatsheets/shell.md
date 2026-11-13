# Shell

## Processes and ports

### Find the process listening on a port

```bash
lsof -i :<port>
```

### Kill the process listening on a port

```bash
kill $(lsof -t -i :<port>)
```

```bash
fuser -k <port>/tcp
```

Example: stop the Angular dev server.

```bash
kill $(lsof -t -i :4200)
```

### Kill the process listening on a port (Windows / PowerShell)

```powershell
Get-NetTCPConnection -LocalPort <port> | ForEach-Object { Get-Process -Id $_.OwningProcess } | Stop-Process
```

## Files

### Find all files containing a word

```bash
grep -r "<word>" .
```

### List files sorted by modification date, sizes in GB

```bash
ls -tl --block-size=G
```

### Read a big file by chunks

Print 1 KiB starting at offset 1 MiB (`skip` is counted in blocks of `bs` bytes):

```bash
dd if=<file> of=/dev/stdout bs=1024 count=1 skip=1024
```
