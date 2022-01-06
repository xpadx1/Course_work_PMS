'use strict';

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
        allowNull: true,
        defaultValue: "New Project",
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

export { Project };