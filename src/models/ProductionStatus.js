'use strict'

const { Model, DataTypes } = require('sequelize')

class ProductionStatus extends Model {
  static init(sequelize) {
    super.init({
      customername: DataTypes.STRING,
      inputfilename: DataTypes.STRING,
      hexid: DataTypes.STRING,
      productname: DataTypes.STRING,
      quantity: DataTypes.INTEGER
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