const { validationResult } = require("express-validator");

const checkError = function (req, res, next) {
  const valiError = validationResult(req);
  if (valiError.errors.length > 0) {
    return res.status(400).json({
      message: valiError,
    });
  }
  //   console.log(error);
  next();
};
module.exports = checkError;
