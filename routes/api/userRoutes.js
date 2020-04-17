const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/login')
  .post(userController.authenticateUser);

router.route('/logout')
  .post(userController.logoutUser);

router.route('/register')
  .post(userController.createUser);

router.route('/findAll')
  .get(userController.findAllUsers);

module.exports = router;