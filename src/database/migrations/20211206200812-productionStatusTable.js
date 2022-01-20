'use strict';

const TABLE_NAME = 'production_status'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TABLE_NAME, {
      // id: {
      //   allowNull: false,
      //   primaryKey: true,
      //   autoIncrement: true,
      //   type: Sequelize.INTEGER
      // },
      customername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inputfilename: {
        allowNull: false,
        type: Sequelize.STRING
      },
      batchname: {
        // remessa
        allowNull: true,
        type: Sequelize.STRING
      },
      hexid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      productname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productalias: {
        allowNull: true,
        type: Sequelize.STRING
      },
      producttype: {
        // 1 - Normal | 2 - Additional
        allowNull: false,
        type: Sequelize.INTEGER
      },
      productstatus: {
        // A - ACTIVE | I - INACTIVE
        allowNull: false,
        type: Sequelize.STRING
      },
      additionalhexid: {
        allowNull: true,
        type: Sequelize.STRING
      },
      creationdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      duedate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      finisheddate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      shippingdate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      comments: {
        allowNull: true,
        type: Sequelize.STRING
      },
      // TODO: create a table to store due date change history
      wo_status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      priorityquantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      excludedquantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mainplastic: {
        allowNull: true,
        type: Sequelize.STRING
      },
      planningid: {
        allowNull: true,
        type: Sequelize.STRING
      },
      packageid: {
        allowNull: true,
        type: Sequelize.STRING
      },
      sequenceinpackage: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      processstartdate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      processenddate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      processcosttime: {
        allowNull: true,
        type: Sequelize.STRING
      },
      initcmfdate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      initcmfinfo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      matchingstartdate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      matchingenddate: {
        allowNull: true,
        type: Sequelize.DATE
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
