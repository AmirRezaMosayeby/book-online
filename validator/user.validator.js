const { body, check } = require("express-validator");
const prisma = require("../../db");

const userValidate = [
  body("fname").notEmpty().trim().isString().escape(),
  body("lname").notEmpty().trim().isString().escape(),
  check("phone").custom((val) => {
    try {
      const user = prisma.user.findFirst({
        where: {
          phone: val,
        },
      });
      if (user) return Promise.reject("this user already exist");

      return val;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }),
];
module.exports = userValidates;
