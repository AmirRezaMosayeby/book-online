const jwt = require("jsonwebtoken");
const userService = require("../controller/user/user.service");

const tokenAuth = async function (req, res, next) {
  const { authorization } = req.headers;
  //   console.log(a);

  if (!authorization) {
    return res.status(403).json(`token not found`);
  }

  const token = authorization.includes("Bearer")
    ? authorization.split(" ")[1]
    : authorization;

  try {
    const { phone } = jwt.verify(token, process.env.SECRET_KEY);
    const user = userService.getByPhone(phone);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json(error.message);
  }
};
module.exports = tokenAuth;
