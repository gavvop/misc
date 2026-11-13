# SSH

## Login without password

Generate a key pair:

```bash
ssh-keygen
```

Copy the public key to the server:

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub <remote-host>
```

Log in:

```bash
ssh <remote-host>
```

## Run ssh-agent on Windows and add a key

In a PowerShell **run as administrator**, check the service:

```powershell
Get-Service ssh*
```

```text
Status   Name               DisplayName
------   ----               -----------
Stopped  ssh-agent          OpenSSH Authentication Agent
```

Enable and start it:

```powershell
Set-Service -Name ssh-agent -StartupType Manual
Start-Service ssh-agent
```

Then, in a shell as your normal user, add the key:

```powershell
ssh-add <private-key-path>
```

## Local port forwarding

```bash
ssh -L <local-port>:<destination-host>:<remote-port> <user>@<ssh-host>
```
