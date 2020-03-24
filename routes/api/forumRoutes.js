const router = require("express").Router();
const forumController = require('../../controllers/forumController')

router.route("/createForum")
    .post(forumController.createForum)

router.route("/getForums")
    .get(forumController.getForums)
    
// router.route("/deleteForum/:id")
//     .get(forumController.findById)
//     .put(forumController.update)
//     .delete(forumController.remove)

module.exports = router;