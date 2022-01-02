import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "EXECUTOR",
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export {User};