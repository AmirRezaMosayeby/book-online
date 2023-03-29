const express = require("express");
const ticketControl = require("../controller/ticket/ticket.controller");

const ticketRouter = express.Router();

ticketRouter.get("/:id/info", ticketControl.getTicket);
ticketRouter.get("/all", ticketControl.getAll);
ticketRouter.post("/add", ticketControl.addNewTicket);
module.exports = ticketRouter;
