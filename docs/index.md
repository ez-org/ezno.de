---
title: Index
date: 2021-03-16
slug: index__111

---
# 𝚎𝚣𝚗𝚘𝚍𝚎

### A simple single-container docker setup for a personal bitcoin full node

[![Build Status](https://travis-ci.org/shesek/eee.svg?branch=master)](https://travis-ci.org/shesek/eee)
[![Latest release](https://img.shields.io/github/v/tag/shesek/eee?label=version&color=orange)](https://github.com/ez-org/eznode/releases/latest)
[![Docker pulls](https://img.shields.io/docker/pulls/eznode/eznode.svg?color=blueviolet)](https://hub.docker.com/r/eznode/eznode)
[![MIT license](https://img.shields.io/github/license/bwt-dev/bwt.svg?color=yellow)](https://github.com/ez-org/eznode/blob/master/LICENSE)
[![Chat on Telegram](https://img.shields.io/badge/chat-on%20telegram-blue)](https://t.me/ez_node)
[![Chat on IRC](https://img.shields.io/badge/chat-on%20IRC-green.svg)](https://webchat.freenode.net/#eznode)

Featuring:

* [**Bitcoin Core:**](packages#bitcoin-core) Pruned by default with optional *trusted* fast-sync
* [**Electrum Server:**](packages#bitcoin-wallet-tracker) Personal Electrum server powered by BWT
* [**BTC RPC Explorer:**](packages#btc-rpc-explorer) Personal block explorer and node dashboard
* [**Specter Desktop:**](packages#specter-desktop) Wallet GUI for hardware and multi-sig setups
* [**Secure remote access**](accessing#connecting-remotely) using [Tor Onion](transports#tor-onion), [SSH tunnels](transports#dropbear-ssh) or [SSL](transports#nginx-ssl)

Why eznode?

* Simple, hassle-free setup
* Lightweight (a single 115 MB docker image)
* Pruning-friendly (requires <5GB of storage)
* Suitable for a dedicated box, but doesn't require one
* Supports Linux, macOS, Windows and ARMv7/v8

<a class="button" href="getting-started">Get Started →</a>

Support development: [⚡ lightning or ⛓️ on-chain via BTCPay](https://btcpay.shesek.info/)