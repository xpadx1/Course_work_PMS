import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const Tasks = sequelize.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  idcreator: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idexecutor: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "TODO",
  }
});

export {Tasks};