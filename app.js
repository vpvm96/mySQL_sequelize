const express = require("express");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const loginRouter = require("./routes/login.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", [userRouter, postRouter, loginRouter]);

app.listen(process.env.PORT, () => {
  console.log(`https://127.0.0.1:${process.env.PORT}`);
});
