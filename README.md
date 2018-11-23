# Miscellanea

### SSH Login without Password

**Generate public key**

$ ssh-keygen

**Send the key to server**

$ ssh-copy-id -i ~/.ssh/id_rsa.pub &lt;remote-host&gt;

**Remote login**

$ ssh &lt;remote-host&gt;
