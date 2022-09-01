# SSH

## SSH Login without Password

Generate public key

```ssh-keygen```

Send the key to server

```ssh-copy-id -i ~/.ssh/id_rsa.pub <remote-host>```

Remote login

```ssh <remote-host>```


## Run ssh-agent on windows and add imported keys

Run ps as administrator

```
PS D:\code> get-service ssh*

Status   Name               DisplayName
------   ----               -----------
Stopped  ssh-agent          OpenSSH Authentication Agent
```
```
PS D:\code> Set-Service -Name ssh-agent -StartupType Manual
PS D:\code> Start-Service ssh-agent
```

Open a cmd/ps with the proper user
```
PS D:\code> ssh-add <private-key-path>
```
