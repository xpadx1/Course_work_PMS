'use strict';

import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const Role = sequelize.define('role',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
export { Role };
