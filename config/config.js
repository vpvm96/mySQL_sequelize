require("dotenv").config();

const env = process.env;

const development = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: env.DIALECT,
};

const production = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: env.DIALECT,
};

const test = {
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  host: env.HOST,
  dialect: env.DIALECT,
};

module.exports = { development, production, test };
