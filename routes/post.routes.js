const Router = require('express');
const router = Router();
const postController = require('../controllers/post.controller');

/**
 * @route POST api/posts
 * @desc  Create a new posts
 * @access Public
 */

router.post('/', postController.createPost);

/**
 * @route GET api/posts
 * @desc  Get all posts
 * @access Public
 */

router.get('/', postController.getPosts);

module.exports = router;
