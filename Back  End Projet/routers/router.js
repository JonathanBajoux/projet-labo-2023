const authRouter = require('./auth.router');
const userRouter = require('./users.router');

const router = require('express').Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports = router;