const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/user.route");
const ticketRouter = require("./routes/ticket.route");
const orderRouter = require("./routes/order.route");

const userControl = require("./controller/user/user.control");
app.use(express.json());

app.use("/user", router);
app.use("/ticket", ticketRouter);
app.use("/order", orderRouter);

app.listen(process.env.PORT, () => {
  console.log(`app connect to port ${process.env.PORT}`);
});
