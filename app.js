const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/user.route");

const userControl = require("./controller/user/user.control");
app.use(express.json());
app.use("/user", router);

app.listen(process.env.PORT, () => {
  console.log(`app connect to port ${process.env.PORT}`);
});
