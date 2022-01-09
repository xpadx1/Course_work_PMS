'use strict';

import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const UserProjects = sequelize.define('userprojects', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  idexecutor: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  idproject: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export { UserProjects };
