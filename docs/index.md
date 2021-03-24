---
title: Index
date: 2021-03-16
slug: index__111

---

# eznode

### A simple pruning-friendly setup for a personal bitcoin full node

[![Build Status](https://travis-ci.org/shesek/eee.svg?branch=master)](https://travis-ci.org/shesek/eee)
[![Latest release](https://img.shields.io/github/v/tag/shesek/eee?label=version&color=orange)](https://github.com/ez-org/eznode/releases/latest)
[![MIT license](https://img.shields.io/github/license/bwt-dev/bwt.svg?color=blue)](https://github.com/ez-org/eznode/blob/master/LICENSE)
[![Docker pulls](https://img.shields.io/docker/pulls/eznode/eznode.svg?color=blueviolet)](https://hub.docker.com/r/eznode/eznode)
[![GitHub stars](https://img.shields.io/github/stars/ez-org/ezno.de?color=BF9D3E)](https://github.com/ez-org/eznode/stargazers)

Docker-based single-container package featuring:

* [**Bitcoin Core:**](packages#bitcoin-core) Pruned by default with optional *trusted* fast-sync
* [**Electrum Server:**](packages#bitcoin-wallet-tracker) Personal Electrum server powered by BWT
* [**BTC RPC Explorer:**](packages#btc-rpc-explorer) Personal block explorer and node dashboard
* [**Specter Desktop:**](packages#specter-desktop) Wallet GUI for hardware and multi-sig setups
* [**Secure remote access**](accessing#connecting-remotely) using [Tor Onion](transports#tor-onion), [SSH tunnels](transports#dropbear-ssh) or [SSL](transports#nginx-ssl)

Why eznode?

* Simple one command setup
* Lightweight (120 MB docker image)
* Pruning-friendly (requires <5GB of storage)
* Suitable for a dedicated box, but doesn't require one
* Supports Linux, macOS, Windows and ARMv7/v8

<a class="button" href="getting-started">Get Started →</a>
<a class="github-btn" href="https://github.com/ez-org/eznode" title="View source code on Github"><svg data-v-7d622f5c="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path data-v-7d622f5c="" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

Support development: [⚡ lightning or ⛓️ on-chain via BTCPay](https://btcpay.shesek.info/)