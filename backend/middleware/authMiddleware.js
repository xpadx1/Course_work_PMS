import jwt from 'jsonwebtoken';
import { option } from '../config/jwt.js';

export function checkJwt(req, res, next) {
  if(req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[2];
    console.log(token);
    if(!token) {
      res.status(403).json({message: 'User not authorization'});
    }
    const decode = jwt.verify(token, option.secret);
    req.user = decode;
    next();

  } catch(e) {
    console.log(e);
    res.status(403).json({message: 'User not authorization'});
  }
}

