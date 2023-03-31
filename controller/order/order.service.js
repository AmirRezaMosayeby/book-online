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
            count: {
              decrement: data.count,
            },
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
