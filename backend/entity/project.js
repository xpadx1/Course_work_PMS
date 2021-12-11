import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const Project = sequelize.define("projects", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  iduser: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

export {Project};