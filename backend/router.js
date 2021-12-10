import express from 'express'
import Router from 'express'
import { User } from './entity/user.js';
import { Project } from './entity/project.js';
import { AuthController } from './authController.js'
//const controller = require('./authController');

const controller = new AuthController;

const router = new Router();

// Authorization
router.post('/registration', controller.registration);
router.post('/login', controller.login);


// user
// router.post('/user', async (req, res) => {
//     try {
//       const {name, email} = req.body;
//       const post = await User.create({name, email});
//       res.json(post);
//     } catch(e) {
//       res.json(e)
//     }
// });

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
