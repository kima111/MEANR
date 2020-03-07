const passport = require("passport");
const router = require("express").Router();
const userController = require("../../controllers/userController")

router.get("/", (req, res) => {
    console.log("HELLO")
    res.send("YO")
})
router.get("/hello", (req, res) => {
    console.log("HELLO")
    res.send("YO")
})

module.exports = router;