'use strict';

import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const UserConnect = sequelize.define("user conections", {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

export { UserConnect };