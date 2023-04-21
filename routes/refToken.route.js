const express = require("express");
const reftokenRouter = express.Router();

const userControl = require("../controller/user/user.control");

reftokenRouter.post("/add", userControl.login);
module.exports = reftokenRouter;
