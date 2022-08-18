const Router = require('express').Router;
const router = new Router();

const userRouter = require('./user.routes');
const postRouter = require('./post.routes');

router.use('/users', userRouter);
router.use('/posts', postRouter);

module.exports = router;
