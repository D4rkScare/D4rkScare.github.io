====================================================
  D4rkScare Blog v2 — 사용법 메모
====================================================

■ 로컬 서버 실행
----------------------------------------------------
cd C:\Users\gohun\Documents\Hugo\d4rk-blog
hugo server --buildDrafts
→ http://localhost:1313


■ 새 글 작성
----------------------------------------------------
hugo new posts/카테고리/제목/index.md

헤더 설명:
  categories  : htb / portswigger / ctf / research
  series      : 단계별 묶음 이름 (같은 이름이면 같은 그룹)
                Ex) "PortSwigger SQLi Labs" → 1편, 2편, 3편...
  difficulty  : Easy / Medium / Hard / Insane
  thumbnail   : /images/thumbnails/파일명.png


■ 이미지 넣는 방법
----------------------------------------------------
1. 썸네일 (카드/목록에 보이는 이미지)
   → static/images/thumbnails/ 폴더에 넣기
   → 헤더에: thumbnail: "/images/thumbnails/파일명.png"

2. 본문 이미지 (스크린샷 등)
   → content/posts/폴더이름/ 안에 같이 넣기
   → 본문에: ![설명](파일명.png)

3. 프로필 이미지
   → static/images/profile/avatar.png 로 저장


■ 카테고리 추가하는 법
----------------------------------------------------
hugo.toml 파일 열어서 아래 형식으로 추가:

  [[params.hubs]]
    name = "TryHackMe"
    slug = "tryhackme"         ← 영문 소문자, 카테고리 이름
    icon = "◉"
    color = "#68d391"
    description = "TryHackMe Rooms"
    thumbnail = "/images/thumbnails/thm.png"

그러면 홈 + 카테고리 페이지에 자동으로 나타남
글 쓸 때 categories: ["tryhackme"] 로 연결


■ PortSwigger 단계별 시리즈 예시
----------------------------------------------------
---
title: "SQL Injection Lab 2"
categories: ["portswigger"]
series: ["PortSwigger SQLi Labs"]   ← 같은 이름으로 묶임
---

→ /categories/portswigger 에서 "PortSwigger SQLi Labs" 
  그룹 안에 1편, 2편, 3편... 순서대로 표시됨
→ 글 오른쪽 사이드바에도 시리즈 목차 자동 생성


■ 배포
----------------------------------------------------
git add .
git commit -m "add: 글 제목"
git push
→ 2분 후 https://d4rkscare.github.io 자동 반영


■ 폴더 구조
----------------------------------------------------
d4rk-blog/
├── hugo.toml                  ← 사이트 설정
├── content/
│   ├── about/index.md         ← 자기소개 페이지
│   └── posts/
│       └── portswigger-sqli-lab1.md
├── static/
│   └── images/
│       ├── profile/avatar.png ← 프로필 사진
│       └── thumbnails/        ← 카드 썸네일들
└── themes/d4rk/               ← 테마 파일

====================================================
