const { PrismaClient } = require("@prisma/client");
const { getAll } = require("./user.control");
const prisma = new PrismaClient();

function getPermitted(data) {
  const instance = ["fname", "lname", "phone", "password", "birthYear"];
  const result = {};
  for (let key of instance) {
    if (data.hasOwnProperty(key)) {
      result[key] = data[key];
    }
  }
  return result;
}

const userService = {
  async getUserById(id) {
    try {
      return await prisma.user.findFirst({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getAllUser() {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async createUser(newData) {
    try {
      const newUser = await prisma.user.create({
        data: getPermitted(newData),
      });
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async updateUser(id, data) {
    try {
      const { fname, lname, password } = data;
      const updated = await prisma.user.update({
        where: {
          id,
        },
        data: {
          fname: fname || undefined,
          lname: lname || undefined,
          password: password || undefined,
        },
      });
      return updated;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async delete(id) {
    try {
      const deleted = await prisma.user.delete({
        where: {
          id,
        },
      });
      return deleted;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = userService;
