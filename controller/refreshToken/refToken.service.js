const db = require("../../db");

const refreshTokenService = {
  async createRefToken(refToken, userId, expireTime) {
    try {
      return await db.refreshToken.create({
        data: { token: refToken, userId, expireTime },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = refreshTokenService;
