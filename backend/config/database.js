import Sequelize from 'sequelize';

// const opts = {
//   define: {
//       //prevent sequelize from pluralizing table names
//       freezeTableName: true
//   }
// }

const sequelize = new Sequelize('postgres://postgres:root@localhost/coursework');

export { sequelize };