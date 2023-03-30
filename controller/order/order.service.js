const prisma = require("../../db");

const orderService = {
  async makeOrder(data) {
    try {
      const newOrder = await prisma.$transaction([
        prisma.order.create({
          data,
        }),
        prisma.ticket.update({
          where: {
            id: data.ticketId,
          },
          data: {
            count: 5,
          },
        }),
      ]);
      return newOrder;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
module.exports = orderService;

// prisma.ticket.count - data.count
