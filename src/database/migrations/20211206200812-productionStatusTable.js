'use strict';

const TABLE_NAME = 'production_status'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inputfilename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hexid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.addIndex(TABLE_NAME, ['customername', 'hexid'], {
      name: `${TABLE_NAME}_idx01`
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(TABLE_NAME)
  }
};
