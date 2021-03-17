---
title: "\U0001F3D7️ Building locally"
date: 2021-03-16
slug: building

---
```bash
# Clone repo and verify signature
git clone https://github.com/ez-org/eznode && cd eznode
git checkout <tag>
git verify-commit HEAD

# Build
docker build -t eznode .

# Run using local image
docker run -it ... eznode ...
```

All the files retrieved during the build are verified by their hash.

To build the ARM32v7/ARM64v8 images, run `./docker/build-arch.sh [arm|arm64] -t eznode`. Cross-compilation requires [qemu-user-static](https://github.com/multiarch/qemu-user-static) to be installed.

You can upgrade third-party packages yourself by setting the following `--build-arg`s: `BITCOIND_{VERSION,SHA256}`, `BWT_{VERSION,SHA256}`, `BTCEXP_{VERSION,SHA256}` and `SPECTER_{VERSION,SHA256}`.

<div class="docs-nav">

[← 🔏 Signed images](signed-images)

<span></span>
</div>