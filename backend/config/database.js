'use strict';

import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:root@localhost/coursework'
);

export { sequelize };
