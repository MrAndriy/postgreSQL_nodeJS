const Router = require('express');
const router = Router();
const userController = require('../controllers/user.controller');

/**
 * @route POST api/users
 * @desc  Register a new user
 * @access Public
 */

router.post('/', userController.createUser);

/**
 * @route GET api/users
 * @desc  Register all users
 * @access Public
 */

router.get('/', userController.getUsers);

/**
 * @route GET api/user/:id
 * @desc  Get single users
 * @access Public
 */

router.get('/:id', userController.getUser);

/**
 * @route PUT api/user/:id
 * @desc  Update single users
 * @access Public
 */

router.put('/:id', userController.updateUser);

/**
 * @route DELETE api/users/:id
 * @desc  Delete user by id
 * @access Public
 */

router.delete('/:id', userController.deleteUser);

module.exports = router;
