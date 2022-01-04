'use strict';

import jwt from 'jsonwebtoken';
import { option } from '../config/jwt.js';

export function checkRole(role) {
    return function(req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[2];

            if (!token) {
                res.status(403).json({
                    message: 'User not authorization'
                });
            }
            const {
                role: userRoles
            } = jwt.verify(token, option.secret);
            let hasRole = false;
            if (role.includes(userRoles)) {
                hasRole = true;
            }

            if (!hasRole) {
                return res.status(403).json({
                    message: "You have not access"
                });
            }
            next();

        } catch (e) {
            console.log(e);
            res.status(403).json({
                message: 'User not authorization'
            });
        }
    };
}