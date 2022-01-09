import Router from 'express';
import { Tasks } from './entity/task.js';
import { Role } from './entity/role.js';
import { UserProjects } from './entity/userProject.js';
import { Project } from './entity/Project.js';
import { AuthController } from './Controller/authController.js';
import { taskController } from './Controller/taskController.js';
import { check } from 'express-validator';
import { checkJwt } from './middleware/authMiddleware.js';
import { checkRole } from './middleware/roleMiddleware.js';
import { Filter } from './filter/filter.js';
import { projectContoller } from './Controller/projectController.js';

const controllerProject = new projectContoller();
const controllerAuth = new AuthController();
const controllerTask = new taskController();
const filterTsk = new Filter();

const router = new Router();

// Authorization
router.post(
  '/registration',
  [
    check('name', 'Field "name" can not be empty').notEmpty(),
    check('password', 'Password must be greater than 4 lettrs').isLength({
      min: 4,
    }),
  ],
  controllerAuth.registration
);

router.post('/login', controllerAuth.login);

//users
router.get('/users', checkJwt, controllerAuth.getAllUsers);
router.get('/users/:id', controllerAuth.getOneUser);

// tasks
router.post('/tasks', checkRole(['TEAMLEAD']), controllerTask.createtask);
router.get('/tasks', checkRole(['EXECUTOR']), controllerTask.getMyTasks);
router.put('/tasks', checkRole(['EXECUTOR']), controllerTask.updataTaskType);
router.get('/tasks/:id', checkRole(['EXECUTOR']), controllerTask.getOneTask);
router.delete('/tasks/:id', checkRole(['TEAMLEAD']), controllerTask.deleteTask);

router.get('/filter', filterTsk.filterTask);

// project

// tasks
router.post('/tasks', checkRole(['TEAMLEAD']), controllerTask.createtask);
router.get('/tasks', checkRole(['EXECUTOR']), controllerTask.getMyTasks);
router.put('/tasks', checkRole(['EXECUTOR']), controllerTask.updataTaskType);
router.get('/tasks/:id', checkRole(['EXECUTOR']), controllerTask.getOneTask);
router.delete('/tasks/:id', checkRole(['TEAMLEAD']), controllerTask.deleteTask);

// project
router.post(
  '/project',
  checkRole(['TEAMLEAD']),
  controllerProject.createProject
);
router.put('/project', controllerProject.updateProject);
router.get('/project', controllerProject.getAllProjects);
router.delete(
  '/project',
  checkRole(['TEAMLEAD']),
  controllerProject.deleteProjects
);
router.post(
  '/project/assign',
  checkRole(['TEAMLEAD']),
  controllerProject.assignExecutor
);

router.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send('Unexpected server error: ' + JSON.stringify(err));
});

export { router };
