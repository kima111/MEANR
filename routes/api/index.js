const router = require("express").Router();
const userRoutes = require("./userRoutes");
const forumRoutes = require("./forumRoutes");
const textRoutes = require("./textRoutes");
const emailRoutes = require("./emailRoutes");

router.use("/user", userRoutes);
router.use("/forum", forumRoutes);
router.use("/text", textRoutes);
router.use("/email", emailRoutes);

module.exports = router;