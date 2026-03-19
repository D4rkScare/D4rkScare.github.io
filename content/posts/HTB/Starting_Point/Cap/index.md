---
title: "Cap"
date: 2026-03-18T22:02:51+09:00
draft: false
categories: ["htb"]        # htb / portswigger / ctf / research
series: ["HTB Machine"]               # 단계별 묶음 (Ex. "PortSwigger SQLi Labs", "HTB Starting Point")
difficulty: "Easy"         # Easy / Medium / Hard / Insane
tags: ["Web enumeration", "Packet capture analysis"]
thumbnail: "1.png"              # /images/thumbnails/파일명.png
ctf_name: "HackTheBox"
points: 0
solves: 88340
flag: ""
---

## Overview
Cap은 HTTP 서버를 실행하는 난이도가 쉬운 Linux 시스템으로, 네트워크 캡처를 포함한 관리 기능을 수행합니다. 보안 제어가 제대로 이루어지지 않으면 IDOR(Insecure Direct Object Reference) 취약점을 통해 다른 사용자의 캡처 파일에 접근할 수 있게 됩니다. 캡처 파일에는 평문으로 된 자격 증명이 포함되어 있으며, 이를 이용해 시스템에 대한 접근 권한을 획득할 수 있습니다. 이후 Linux 시스템의 취약점을 악용하여 루트 권한으로 상승할 수 있습니다.

### Nmap 포트 스캔 (정찰)
┌──(d4rkscare㉿kr0pt)-[/mnt/c/Users/gohun/Desktop]
└─$ sudo nmap -sV 10.129.5.103
Starting Nmap 7.95 ( https://nmap.org ) at 2026-03-19 15:52 KST
Nmap scan report for 10.129.5.103
Host is up (0.21s latency).
Not shown: 997 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
21/tcp open  ftp     vsftpd 3.0.3
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)
80/tcp open  http    Gunicorn
### 기능 파악
![페이지 1](/Cap_img/2.png)
![페이지 2](/Cap_img/3.png)
![페이지 3](/Cap_img/4.png)
![페이지 4](/Cap_img/5.png)

1. DashBoard, ipconfig 내용(/data), Pcap 내용 (각종 디렉토리 경로 파악 가능)

## Analysis
현재로 알 수 있는 건 Gunicorn과 각 버전 노출로 인한 ftp, ssh, 겉핡기 식의 서버 내부 상황

1. 예상 공격 체인

```
FTP Anonymous -> Gunicorn version find & exploit
-> ssh -> 권한 상승 -> FLAG
```

## Exploitation

## Flag

```
FLAG{...}
```
