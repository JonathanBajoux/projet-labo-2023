const usersController = require('../controllers/users.controller');
const userRouter = require('express').Router();


userRouter.route('/getAll')
    .get(usersController.getAll)
    .post(usersController.add)

    .all(((res, req) => {

        res.sendStatus(405);
}));

userRouter.route('/:id')
    .get(usersController.getById)
    .put(usersController.update)
    .delete(usersController.delete)
    .all(((res, req) => {
        res.sendStatus(405);
    }));

module.exports = userRouter;