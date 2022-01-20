'use strict'

const { Model, DataTypes, col } = require('sequelize')

class ProductionStatus extends Model {
  static init(sequelize) {
    super.init({
      customername: DataTypes.STRING,
      inputfilename: DataTypes.STRING,
      batchname: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: null // col('inputfilename')
      },
      hexid: {
        primaryKey: true,
        type: DataTypes.STRING
      },
      productname: DataTypes.STRING,
      productalias: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      producttype: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      productstatus: {
        type: DataTypes.STRING,
        defaultValue: 'I'
      },
      additionalhexid: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      creationdate: DataTypes.DATE,
      duedate: DataTypes.DATE,
      finisheddate: {
        type: DataTypes.DATE,
        defaultValue: null
      },
      shippingdate: {
        type: DataTypes.DATE,
        defaultValue: null
      },
      comments: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      wo_status: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      priorityquantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      excludedquantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      mainplastic: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      planningid: {
        type: DataTypes.INTEGER,
        defaultValue: null
      },
      packageid: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      sequenceinpackage: {
        type: DataTypes.INTEGER,
        defaultValue: null
      },
      processstartdate: {
        type: DataTypes.DATE,
        defaultValue: null
      },
      processenddate: {
        type: DataTypes.DATE,
        defaultValue: null
      },
      processcosttime: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      initcmfdate: {
        type: DataTypes.DATE,
        defaultValue: null
      },
      initcmfinfo: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      matchingstartdate: {
        type: DataTypes.DATE,
        defaultValue: null
      },
      matchingenddate: {
        type: DataTypes.DATE,
        defaultValue: null
      }
    }, {
      sequelize,
      tableName: 'production_status'
    })
  }

  static associate(models) {
    //this.belongsToMany(models.Profile, {
    //  foreignKey: 'ProductionStatusid',
    //  through: 'grants',
    //  as: 'profiles'
    //})
  }
}

module.exports = ProductionStatus