import Sequelize from 'sequelize';

const sequelize = new Sequelize('coursework', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

export { sequelize };