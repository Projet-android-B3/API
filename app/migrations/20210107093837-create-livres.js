'use strict';

const Tools = require('../utils/Tools');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Livres', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Tools.uuid()
            },
            ISBN: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT('long'),
                allowNull: true
            },
            created_at: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE,
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Livres');
    }
};