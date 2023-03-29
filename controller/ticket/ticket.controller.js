const ticketService = require("./ticket.service");

const ticketControl = {
  async getTicket(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const ticket = await ticketService.getTicketById(+id);
      res.status(200).json(user);
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      });
    }
  },
  async getAll(req, res) {
    try {
      const all = await ticketService.getAllTicket();
      res.status(200).json(all);
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      });
    }
  },

  async addNewTicket(req, res) {
    try {
      const { departure_date } = req.body;
      console.log(new Date(departure_date));
      const newTicket = await ticketService.createTicket({
        ...req.body,
        departure_date: new Date(Date.parse(departure_date)),
      });
      return res.status(201).json(newTicket);
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      });
    }
  },
};
module.exports = ticketControl;
