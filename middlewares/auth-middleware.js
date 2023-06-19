const jwt = require("jsonwebtoken");
const { Users } = require("../models");

async function auth_middleware(req, res, next) {
  try {
    // 1. 쿠키가 있는지 => 없으면 로그인후 사용 가능한 api 메세지 주면서 리턴
    // 2. 쿠키에 jwt 있는지 => 없으면 로그인후 사용 가능한 api 메세지 주면서 리턴
    if (!req.cookies || !req.cookies.jwt) {
      return res.status(400).send({ message: "로그인 후 사용 가능한 api" });
    }

    const token = req.cookies.jwt;
    // 3. jwt verify 함수를 이용해서 쿠키에서 받아온 토큰값 인증
    const { userId: id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await Users.findByPk(id);
    // 4. 인증이 성공 할시 res.locals.user = user 정보를 담아서 보내자
    res.locals.user = user;
    next();
    // 5. 인증이 실패시 => error
  } catch (error) {
    console.log(error);
    res.status(500).send({ errorMessage: error.message });
  }
}

module.exports = { auth_middleware };
