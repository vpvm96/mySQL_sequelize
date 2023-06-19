const { sequelize, Users, Posts, Comments, Likes } = require("../models");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const [users, metadata] = await sequelize.query("SELECT * FROM Users");

    res.send({ users });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { nickname, password, confirm_password } = req.body;

    // 닉네임은 최소 3자 이상, 알파벳 대소문자(a~z, A~Z), 숫자(0~9)로 구성하기
    const regexNickname = /^[a-zA-Z0-9]{3,20}$/;
    const regexNicknameResult = regexNickname.test(nickname);
    if (regexNicknameResult === false) {
      return res.status(400).send({
        message: "닉네임은 영문, 숫자 조합으로 3~20자리로 입력해주세요.",
      });
    }

    // 비밀번호 길이(4자이상 20이하)
    const regexPasswordLength = /^[A-Za-z0-9]{4,20}$/;
    const regexPasswordLengthResult = regexPasswordLength.test(password);
    if (regexPasswordLengthResult === false) {
      return res.status(400).send({
        message: "비밀번호는 영문, 숫자 조합으로 4~20자리로 입력해주세요.",
      });
    }

    // 비밀번호 닉네임과 같은 값 없어야 함
    const regexUnequalNickname = new RegExp(`^((?!${nickname}).)*$`, "g");
    const regexUnequalNicknameResult = regexUnequalNickname.test(password);
    if (regexUnequalNicknameResult === false) {
      return res
        .status(400)
        .send({ message: "비밀번호 닉네임과 같은 값 없어야 함" });
    }

    // 비밀번호 === 비밀번호 확인
    if (password !== confirm_password) {
      return res
        .status(400)
        .send({ message: "password, confirm_password 불일치" });
    }

    try {
      const user = await Users.create({ nickname, password });
      // console.log({ user });
      res.status(201).send({ user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ errorMessage: error.original.sqlMessage });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nickname, password } = req.body;

    const [result, metadata] = await sequelize.query(`
    UPDATE Users SET
    nickname="${nickname}",password="${password}"
    WHERE id=${id};
  `);
    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [result, metadata] = await sequelize.query(`
      DELETE FROM Users WHERE id = ${id}; 
    `);

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

// 테스트용
const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    const [result, metadata] = await sequelize.query(`
      DELETE FROM Users;
    `);

    res.send({ result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorMessage: error.message });
  }
};

async function login(req, res) {
  const { nickname, password } = req.body;

  const userInfo = await Users.findOne({
    where: { nickname, password },
  });

  const token = jwt.sign({ user_id: userInfo.id }, process.env.JWT_SECRET_KEY);

  res.cookie("jwt", token, {
    maxAge: 1000 * 60 * 10,
  });

  res.send("HI");
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  deleteUsers,
  login,
};
