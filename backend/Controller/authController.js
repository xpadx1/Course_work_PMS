import { User } from '../entity/user.js';
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { option } from '../config/jwt.js';
import { mailer } from '../config/nodemailer.js';

const generateToken = (id, role) => {
  const payload = {
    id,
    role
  }
  return jwt.sign(payload, option.secret, {expiresIn: "24h"});
}

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.status(400).json({message: 'Registration error', errors})
      }
      const {name, password, email} = req.body;
      
      const condidate = await User.findOne({ where: { name: name } });
      if(condidate) {
        return res.status(400).json({message: "User with same name already exist"});
      }

      // replace Sync hash to Async, use 'bcrypt.hash()'
      const hashPass = bcrypt.hashSync(password, 5);
      const post = await User.create({name, email, password: hashPass});

      const message = {
        to: email, // list of receivers
        subject: "registration", // Subject line
        text: "Your account has been successfully created" // plain text body
      }

      mailer(message);

      res.json(post);
      
    } catch(e) {
      console.log(e);
      res.status(400).json({message: 'Registration error'});
    }
  }

  async login(req, res) {
    try {

      const {name, password, email} = req.body;
      const user = await User.findOne({ where: { name: name } });

      if(!user) {
        return res.status(400).json({message: 'user with same name no found'});
      }

      const validPass = bcrypt.compareSync(password, user.password)
      if(!validPass) {
        return res.status(400).json({message: 'wrong password'});
      }

      const token = generateToken(user.id, user.role);
      return res.json({token});

    } catch(e) {
      console.log(e);
      res.status(400).json({message: 'login error'});
    }  
  }

  async getAllUsers(req, res) {
    try {

      const {name, password, email} = req.body;
      const users = await User.findAll();
      
      return res.json({users});

    } catch(e) {
      console.log(e);
      res.status(400).json({message: 'login error'});
    }  
  }
}

export {AuthController};