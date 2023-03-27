const userControl = require("../controller/user/user.control");
const tokenAuth = require("../midlleware/auth");
const checkError = require("../midlleware/check.validate.error");
const express = require("express");

const router = express.Router();

router.post("/register", checkError, userControl.register);
router.get("/:id/info", userControl.getUser);
router.get("/all", userControl.getAll);
router.get("/login", userControl.login, tokenAuth);
router.put("/:id/update", checkError, userControl.updated);
router.delete("/:id/delete", userControl.delete);

module.exports = router;
