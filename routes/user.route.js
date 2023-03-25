const userControl = require("../controller/user/user.control");

const express = require("express");

const router = express.Router();

router.post("/register", userControl.register);
router.get("/:id/info", userControl.getUser);
router.get("/all", userControl.getAll);
router.put("/:id/update", userControl.updated);
router.delete("/:id/delete", userControl.delete);

module.exports = router;
