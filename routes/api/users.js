const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

router.get("/login", usersCtrl.login);
router.get("/signup", usersCtrl.signup);
router.get('/signout', usersCtrl.signout);

module.exports = router;