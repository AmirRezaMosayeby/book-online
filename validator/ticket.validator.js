const { body, check } = require("express-validator");
const prisma = require("../db");

const ticketValidate = [
  body("code").isLength(8),
  check("code").custom((val) => {
    try {
      const Ticket = prisma.ticket.findUnique({
        where: {
          code: val,
        },
      });
      console.log(Ticket);
      if (Ticket) return Promise.reject("this ticket already exist");

      return Ticket;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }),
];
module.exports = ticketValidate;
