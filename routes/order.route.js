const orderControl = require("../controller/order/order.controller");
const tokenAuth = require("../midlleware/auth");
const checkError = require("../midlleware/check.validate.error");
const express = require("express");

const orderRouter = express.Router();

orderRouter.post("/new", tokenAuth, checkError, orderControl.reserveTicket);

module.exports = orderRouter;
