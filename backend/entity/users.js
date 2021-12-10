import Sequelize from 'sequelize';
import { sequelize } from '../config/database.js';

const User = sequelize.define("user", {
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
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
// User.sync().then(() => {
//   console.log('table created');
// });

export {User};