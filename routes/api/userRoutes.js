const passport = require("passport");
const router = require("express").Router();
const userController = require("../../controllers/userController")

router.use("/", function(req, res){
console.log(req)
res.send('hello from the other side')
})

module.exports = router;