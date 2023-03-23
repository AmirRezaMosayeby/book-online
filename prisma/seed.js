const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const date = new Date();
// const newDate = date.setDate(date.getDate() + 1);

const testUser = [
  {
    fname: "amirReza",
    lname: "mosayeby",
    phone: "093973501536",
    password: "1234",
  },
];

const testTicket = [
  {
    from_locaion: "2",
    to_location: "4",
    departure_date: new Date().setDate(new Date().getDate() + 1),
    unit_price: 3.5,
    count: 2,
  },
];

async function main() {
  for (let user of testUser) {
    await prisma.User.create({
      data: user,
    });
  }
  for (let ticket of testTicket) {
    await prisma.Ticket.create({
      data: ticket,
    });
  }
}
main();
