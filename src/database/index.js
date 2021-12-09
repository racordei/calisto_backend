const NODE_ENV = process.env.NODE_ENV || 'development'

const Sequelize = require('sequelize')
const { DataTypes } = require('sequelize')
const dbConfig = require('../config/database')
const fs = require('fs')
const path = require('path')

const sequelize = new Sequelize(dbConfig[NODE_ENV])

if (dbConfig[NODE_ENV].dialect === 'sqlite') {
  sequelize.query('PRAGMA case_sensitive_like = false')
}

// inicializar automatico
// é possivel usar o consign npm
// ou require-directory npm
const modelsPath = path.join(__dirname, '..', 'models')
const files = fs.readdirSync(modelsPath)/*.filter(f => {
  return f.endsWith('ProductionStatus.js')
})*/
const models = files.map(file => require(path.join(modelsPath, file)))

models.forEach(model => model.init(sequelize))
models.forEach(model => model.associate(sequelize.models))

module.exports = sequelize