import Router from 'express'
import { Project } from './entity/project.js';
import { AuthController } from './authController.js';
import { check } from 'express-validator';
import { checkJwt } from './middleware/authMiddleware.js';
import { checkRole } from './middleware/roleMiddleware.js';

const controller = new AuthController;

const router = new Router();

// Authorization
router.post('/registration', [
  check('name', 'Field "name" can not be empty').notEmpty(),
  check('password', 'Password must be greater than 4 lettrs').isLength({min:4})
], controller.registration);

router.post('/login', controller.login);

//users
router.get('/users', checkJwt, controller.getAllUsers);

// some functions that access special roles (example: EXECUTOR) 
//router.get('/users', checkRole(['EXECUTOR']), controller.getAllUsers);


// project
router.post('/project', async (req, res) => {
    try {
      const {name, iduser} = req.body;
      const post = await Project.create({name, iduser});
      res.json(post);
    } catch(e) {
      res.json(e)
    }
});
router.get('/projectall', () => { console.log( 'router:  /project/:id' + ' get all projects') });
router.get('/project/:id', () => { console.log( 'router:  /project/:id' + ' get project by id') });
router.post('/project/solution', () => { console.log( 'router:  /project/solution' + ' post solution') });
router.put('/project/solution', () => { console.log( 'router:  /project/solution' + ' update solution') });
router.delete('/project/:id', () => { console.log( 'router:  /project/:id' + ' delete project by id') });


router.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send("Unexpected server error: " + JSON.stringify(err));
})

export { router };
