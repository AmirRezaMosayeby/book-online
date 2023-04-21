const refreshTokenService = require("./refToken.service");

const refreshTokenControl = {
  async addrefreshToken(req, res) {
    try {
      const { Authorization } = req.body;
      if (!Authorization) {
        return res.send("token is needed");
      }
      const token = Authorization.includes("Bearer")
        ? Authorization.split(" ")[1]
        : Authorization;
      const refToken = await refreshTokenService.createRefToken(token);
      res.status(200).json(refToken);
    } catch (error) {
      res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  },
};
module.exports = refreshTokenControl;
