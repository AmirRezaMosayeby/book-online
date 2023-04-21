const db = require("../../db");

const ticketService = {
  async getTicketById(id) {
    try {
      return db.ticket.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllTicket() {
    try {
      return await db.ticket.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async createTicket(newData) {
    try {
      return await db.ticket.create({
        data: newData,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = ticketService;
