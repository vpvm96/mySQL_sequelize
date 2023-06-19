# 다이어그램 링크

- [다이어그램 링크](https://drawsql.app/teams/leos-team-8/diagrams/prac-node01)

# 프로젝트 사용 모듈

- express - 서버 프레임 워크
- cookie-parser - 쿠키를 쉽게 세팅
- jsonwebtoken - jwt 이용하여 인증
- nodemon - 서버를 자동으로 켜줌(개발용)
- sequelize - ORM db, table 을 서버에서 쉽게 생성 및 여러 쿼리 함수사용가능
- sequelize-cli - 시퀄라이즈를 cli를 통해서 실행(개발용)
- mysql2 - node용 mysql client
- dotenv - 환경변수 .env파일을 사용하게 해줌

## Sequelize, Sequelize-cli 설치

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
