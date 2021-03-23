---
title: "⭐ Getting started"
date: 2021-03-15
slug: getting-started

---
## 🚀 Quickstart

[Install Docker](https://docs.docker.com/get-docker/) (the only dependency) and start eznode with the data directory mounted to `/data`:

```bash
docker run -it --rm --name ez -v ~/eznode:/data eznode/eznode TOR=1 XPUB=<xpub>
```

This will setup a pruned Bitcoin Core full node, an Electrum server tracking your `<xpub>`, a block explorer and a Tor onion service for secure remote access. All the information you need for accessing them will be shown on startup.

Change `~/eznode` if you'd like to store the node's data files elsewhere. On Windows, you can use `$env:AppData\eznode` to store them in `C:\Users\<USER>\AppData\Roaming`. They require \~4.8GB of free space.

On Windows/macOS, you'll need to [publish the ports with `-p`](accessing#connecting-locally) to access them locally.

Set `TRUSTED_FASTSYNC=1` to enable the [_trusted_ fast-sync](packages#fast-sync) mode. You should carefully consider the implications and avoid this if possible.

To enable Specter Desktop, set `SPECTER=1`.

To experiment on signet, set `NETWORK=signet`.

Signature verification instructions [are available here](signed-images).

## ✂️ Pruning

eznode is pruned by default with prune=550. It'll take up a total of \~4.8GB including the UTXO set and indexes (as of March 2021).

A pruned node can only scan the recent blocks it still has available for transactions related to your wallet. This makes it primarily suitable for use with newly created wallets.

There is, however, an opportunity to scan for your wallet's full history during the initial sync of your node, by scanning the blocks before they get pruned. This requires your xpubs/descriptors to be [configured](getting-started#configuration) during the initial sync and will not work with [fast-sync](packages#fast-sync).

Additional xpubs/descriptors added after your node is synced will by default be tracked for new activity only.
If you'd like to retain the ability to rescan wallets with historical activity, set `PRUNE_UNTIL=<yyyy-mm-dd>` to keep blocks after the given date or `PRUNE=0` to disable pruning entirely. _(Make sure to add these options in your config file so they don't get lost.)_

Then, when adding new xpubs/descriptors, you could initiate a rescan by setting `RESCAN_SINCE=<yyyy-mm-dd>` to the wallet creation time (err on the too early side to avoid missing transactions). It will have to be more recent than `PRUNE_UNTIL`.

## ⚙️ Configuration

There are no mandatory configurations \\o/, but you'll need to set at least one `XPUB`/`DESCRIPTOR` to use the [BWT Electrum server](packages#bitcoin-wallet-tracker).

eznode can be configured in several ways:

1. Using a `config` file with `KEY=VAL` pairs in your data directory (`~/eznode/config`). Example with some common options:

       XPUB=xpub33...
       XPUB_2=xpub44...
       DESCRIPTOR='wpkh(xpub55.../0/*)'
       
       # Enable authentication (except for Electrum)
       AUTH_TOKEN=mySecretPassword
       
       # Enable *trusted* fast-sync
       # TRUSTED_FASTSYNC=1
       
       # Enable Tor Onion service
       TOR=1
       
       # Keep blocks since 2021 to enable wallet rescans
       PRUNE_UNTIL=2021-01-01

   > The config file is `source`ed and may contain variables, bash scripting and comments.
2. Using a list of `KEY=VALUE` pairs tucked at the end of `docker run`:

   ```bash
   docker run -it ... eznode/eznode NETWORK=signet
   ```
3. Using the standard `-e`/`--env` and `--env-file` arguments for `docker run`:

   ```bash
   docker run -it ... -e NETWORK=signet eznode/eznode
   ```

> Note that dashed options (like `-e` or `--name`) always go *before* the `eznode/eznode` in the `docker run` command.

Global options:

* `NETWORK=bitcoin` (or `signet`/`testnet`/`regtest`)
* `AUTH_TOKEN=<none>` (enable [authentication](accessing#authentication))
* `VERBOSE=0` (increase logs verbosity)
* `BIND_ADDR=<auto>` (defaults to the container's virtual address)

Enable/disable packages:

* `BWT=1`
* `EXPLORER=1`
* `SPECTER=0`
* `TOR=0`
* `SSHD=0`
* `SSL=0`

See the individual packages for their configuration options.

<div class="docs-nav"><span></span>

[👩‍💻 Accessing the services →](accessing)

</div>