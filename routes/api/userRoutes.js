const passport = require("passport");
const router = require("express").Router();
const userController = require("../../controllers/userController")

// router.use("/login", function(req, res){
// console.log(req.body)
// res.send('found')
// })

// router.use("/register", function(req, res){
//     console.log(req.body)
//     res.send('hello from the other side register')
// })

// router.route("/login")
//     .get(userController.findUser)

router.route("/register")
    .post(userController.createUser);

module.exports = router;