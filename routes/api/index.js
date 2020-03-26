const router = require("express").Router();
const userRoutes = require("./userRoutes");
const forumRoutes = require("./forumRoutes");
const textRoutes = require("./textRoutes");

router.use("/user", userRoutes);
router.use("/forum", forumRoutes);
router.use("/text", textRoutes);

module.exports = router;