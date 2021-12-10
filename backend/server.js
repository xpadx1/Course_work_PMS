import express from 'express'
import Sequelize from 'sequelize';
import { router } from './router.js';

//Database
import { sequelize } from './config/database.js';

const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.query);
  res.status(200).json('Server working');
})
 
// app.post('/', async (req, res) => {
//   try {
//     const {name, age} = req.body;
//     const post = await User.create({name, age});
//     res.json(post);
//   } catch(e) {
//     res.json(e)
//   }
// })

app.use('/', router);

app.set("view engine", "hbs");
 
async function startApp() {
  try {

    sequelize.sync().then(()=>{
      app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

    }).catch(err=>console.log(err));


  } catch(e) {
    console.log(e);
  }
}

startApp()