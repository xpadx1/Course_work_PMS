import { Router } from 'express'
import { AuthController } from './Controller/authController.js';
import { taskController } from './Controller/taskController.js';
import { check } from 'express-validator';
import { checkJwt } from './middleware/authMiddleware.js';
import { checkRole } from './middleware/roleMiddleware.js';

const controllerAuth = new AuthController;
const controllerTask = new taskController;

const router = new Router();

// Authorization
router.post('/registration', [
  check('name', 'Field "name" can not be empty').notEmpty(),
  check('password', 'Password must be greater than 4 lettrs').isLength({min:4})
], controllerAuth.registration);

router.post('/login', controllerAuth.login);

//users
router.get('/users', checkJwt, controllerAuth.getAllUsers);

// tasks
router.post('/tasks', checkRole(['TEAMLEAD']), controllerTask.createtask);
router.get('/tasks', checkRole(['TEAMLEAD']), controllerTask.getMyTasks); 
router.put('/tasks', checkRole(['EXECUTOR']), controllerTask.updataTaskType);
router.get('/tasks/:id', checkRole(['TEAMLEAD']), controllerTask.getOneTask);
router.delete('/tasks/:id', checkRole(['TEAMLEAD']), controllerTask.deleteTask);

router.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send("Unexpected server error: " + JSON.stringify(err));
})

export { router };
