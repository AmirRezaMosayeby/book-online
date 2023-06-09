const userService = require("./user.service");
const refreshTokenService = require("../refreshToken/refToken.service");
const jwt = require("jsonwebtoken");
// require("dotenv").config();

const userControl = {
  async getUser(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const user = await userService.getUserById(+id);
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
      const all = await userService.getAllUser();
      res.status(200).json(all);
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      });
    }
  },

  async register(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      res.status(403).json({
        error: true,
        message: error.message,
      });
    }
  },
  async updated(req, res) {
    try {
      const { id } = req.params;
      const updated = await userService.updateUser(+id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  },
  async login(req, res, next) {
    try {
      const { phone } = req.body;
      const date = new Date();
      const newDate = date.setDate(date.getDate() + 7).toString();
      const user = await userService.getByPhone(phone);
      const userId = user.id;

      if (!user) {
        res.status(403).json({
          message: "invalid user phone number!",
        });
      }

      const token = jwt.sign({ phone: user.phone }, process.env.SECRET_KEY, {
        expiresIn: Number(process.env.TOKEN_EXPIRE_TIME),
      });

      const refreshToken = jwt.sign(
        { phone: user.phone },
        process.env.REFRESH_TOKEN
      );

      const refToken = await refreshTokenService.createRefToken(
        refreshToken,
        userId,
        newDate
      );
      res.status(200).send(refToken);
      res.json({
        access_token: token,
        refresh_token: refreshToken,
      });
    } catch (error) {
      res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await userService.delete(+id);
      res.status(205).json(deleted);
    } catch (error) {
      res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  },
};
module.exports = userControl;
