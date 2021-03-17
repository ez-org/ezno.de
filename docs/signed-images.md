---
title: "\U0001F50F Signed images"
date: 2021-03-17
slug: signed-images

---
Signed docker image digests are available in [`SHA256SUMS.asc`](https://github.com/ez-org/eznode/blob/master/SHA256SUMS.asc).

The images are signed by Nadav Ivgi (@shesek). The public key can be verified on the [PGP WoT](http://keys.gnupg.net/pks/lookup?op=vindex&fingerprint=on&search=0x81F6104CD0F150FC), [github](https://api.github.com/users/shesek/gpg_keys), [twitter](https://twitter.com/shesek), [keybase](https://keybase.io/nadav), [hacker news](https://news.ycombinator.com/user?id=nadaviv) and [this video presentation](https://youtu.be/SXJaN2T3M10?t=4).

```bash
# Verify signature
wget https://raw.githubusercontent.com/ez-org/eznode/latest/SHA256SUMS.asc
gpg --keyserver keyserver.ubuntu.com --recv-keys FCF19B67866562F08A43AAD681F6104CD0F150FC
gpg --verify SHA256SUMS.asc

# Get the signed hash for your platform
grep amd64 SHA256SUMS.asc

# Fetch docker image by hash and give it a local alias
docker pull eznode/eznode@sha256:<hash>
docker tag eznode/eznode@sha256:<hash> eznode

# Run using the local alias
docker run -it ... eznode ...
```

<div class="docs-nav">

[← 🔧 Node management](node-management)

[🏗️ Building locally →](building)

</div>