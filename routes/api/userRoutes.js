const passport = require("passport");
const router = require("express").Router();
const userController = require("../../controllers/userController")

router.route("/login")
    .post(userController.findUser)

router.route("/register")
    .post(userController.createUser);

router.route("/findAll")
    .get(userController.findAllUsers);

module.exports = router;