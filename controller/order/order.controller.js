const ticketControl = require("../ticket/ticket.controller");
const ticketService = require("../ticket/ticket.service");
const orderService = require("./order.service");

const orderControl = {
  async reserveTicket(req, res) {
    try {
      const { ticketId, count, total_price, status } = req.body;
      const ticket = await ticketService.getTicketById(ticketId);
      console.log(ticket);

      if (!ticket.count) {
        return res.status(410).json("sold out!");
      }
      if (ticket.count < count) {
        return res.status(406).json("more than avalable ticket!");
      }
      const order = orderService.makeOrder({
        ticketId,
        count,
        total_price,
        status,
        userId: req.user.id,
      });

      return res.status(200).json(order);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
module.exports = orderControl;
