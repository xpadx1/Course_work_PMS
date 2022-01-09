'use strict';
import { User } from '../entity/user.js';

export const checkAccess = () => {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const { idexecutor, idproject } = req.body;
      const userid = User.findOne({
        where: {
          id: idexecutor,
        },
      });

      if (idexecutor != userid) {
        return res.status(403).json({
          message: 'You have no access',
        });
      }
      next();

    } catch (e) {
      console.log(e);
      res.status(403).json({
        message: 'Access denied',
      });
    }
  };
};
