import express from 'express'
import Router from 'express'

const router = new Router();

// project
router.get('/', () => { console.log( 'router:  /project/:id' + ' get all projects') });
router.get('/:id', () => { console.log( 'router:  /project/:id' + ' get project by id') });
router.post('/solution', () => { console.log( 'router:  /project/solution' + ' post solution') });
router.put('/solution', () => { console.log( 'router:  /project/solution' + ' update solution') });
router.delete('/:id', () => { console.log( 'router:  /project/:id' + ' delete project by id') });


router.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send("Unexpected server error: " + JSON.stringify(err));
})

export { router };
