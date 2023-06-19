# 링크 리스트

- [ERD](https://drawsql.app/teams/leos-team-8/diagrams/prac-node01)
- [Scheme](https://docs.google.com/spreadsheets/d/15lx0WcS6knWnNEvSA0UA5EXAQquI-P2R1NpKiqJvRsw/edit?usp=sharing)
- [API](https://docs.google.com/spreadsheets/d/1D_pfYw49hD_yI5M1Ul3ZfGCsD9qM7KURZHSe_O29yIM/edit?usp=sharing)

<br />

# 프로젝트 사용 모듈

- express - 서버 프레임 워크
- cookie-parser - 쿠키를 쉽게 세팅
- jsonwebtoken - jwt 이용하여 인증
- nodemon - 서버를 자동으로 켜줌(개발용)
- sequelize - ORM db, table 을 서버에서 쉽게 생성 및 여러 쿼리 함수사용가능
- sequelize-cli - 시퀄라이즈를 cli를 통해서 실행(개발용)
- mysql2 - node용 mysql client
- dotenv - 환경변수 .env파일을 사용하게 해줌

<br />

# 기능 체크 리스트

- 회원가입 API
- 로그인 API
- 로그인 검사 미들웨어
- 댓글 목록 조회 API
- 댓글 작성 API
- 댓글 수정 API
- 댓글 삭제 API
- 게시글 좋아요 API
- 좋아요 게시글 조회 API

<br />

# API 설명

### 일반 API

- 회원가입 - singup - All
- 로그인 - login - All

### 게시글 API

- 게시글 작성 - posts - User
- 게시글 목록 조회 - posts - All
- 게시글 상세 조회 - posts/:post_id - All
- 게시글 수정 - posts/:post_id - User
- 게시글 삭제 - posts/:post_id - User

### 댓글 API

- 댓글 생성 - comments/:post_id - User
- 댓글 목록 조회 - comments/:post_id - All
- 댓글 수정 - comments/:post_id - User
- 댓글 삭제 - comments/:post_id - User

### 좋아요 API

- 좋아요 게시글 조회 - posts/likes - User
- 게시글 좋아요 누르기 - posts/:post_id/likes - User

### Sequelize, Sequelize-cli 설치

<br />
- sequelize-cli 설치

```bash
npm i -g sequelize-cli
```

- sequelize 설치

```bash
npm i sequelize
```

- sequelize-cli 초기화

```bash
npx sequelize init
```

<br />

## Sequelize, Sequelize-cli 사용법

<br />

### sequelize-cli 명령어

- Createing the Models - 모델 생성

```bash
npx sequelize model:generate --name Users --attributes nickname:string,password:string
```

```bash
npx sequelize model:generate --name Posts --attributes user_id:BIGINT,title:string,content:text
```

```bash
npx sequelize model:generate --name Comments --attributes user_id:BIGINT,post_id:BIGINT,content:text
```

```bash
npx sequelize model:generate --name Likes --attributes user_id:BIGINT,post_id:BIGINT, comment_id:BIGINT
```

## Sequelize migrate 명령어

- migrate

```bash
npx sequelize db:migrate
```

## Check created tables

- check tables

```bash
npx sequelize db:migrate:status
```

<br />

# Reference

- Sequelize

  - [Sequelize01](https://kyounghwan01.github.io/blog/etc/sequelize/sequelize-join/#inner-outer-join%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A1%E1%86%AB)
  - [Sequelize02](https://inpa.tistory.com/entry/ORM-%F0%9F%93%9A-sequelize-left-join-%ED%95%98%EB%8A%94%EB%B2%95)

- Migration

  - [Migration01](https://life-with-coding.tistory.com/68)

- Status Code
  - [Status Code 401, 403](https://sanghaklee.tistory.com/61)
  - [Status Code 400, 412](https://stackoverflow.com/questions/10730852/http-status-code-400-vs-412?noredirect=1&lq=1)
  - [Status Code(updated success)](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/#200---299)
