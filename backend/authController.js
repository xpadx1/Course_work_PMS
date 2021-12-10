import { User } from './entity/user.js';
import bcrypt from 'bcryptjs'


class AuthController {
  async registration(req, res) {
    try {
      const {name, password, email} = req.body;
      
      //const condidate = await User.findOne({username});
      // if(condidate) {
      //   return res.satus(400).json({message: "User with same name already exist"});
      // }

      // replace Sync hash to Async, use 'bcrypt.hash()'
      const hashPass = bcrypt.hashSync(password, 5);
      const post = await User.create({name, email, password: hashPass});
      res.json(post);
      
    } catch(e) {
      console.log(e);
      res.status(400).json({message: 'Registration error'});
    }
  }

  async login() {
    try {

    } catch(e) {
      console.log(e);
      res.status(400).json({message: 'login error'});
    }  
  }
}

export {AuthController};