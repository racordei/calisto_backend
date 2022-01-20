const express = require('express')
const { DeleteAllProductionStatusController } = require('./controllers/DeleteAllProductionStatusController')

function ExceptionHandling(req, res, f) {
  return f(req, res)
}

const ProductionStatusController = require('./controllers/ProductionStatusController')
const DeleteAllProductionStatus = new DeleteAllProductionStatusController()

const routes = express.Router()

routes.get('/', (req, res) => ExceptionHandling(req, res, ProductionStatusController.index))
routes.post('/insert', (req, res) => ExceptionHandling(req, res, ProductionStatusController.store))
routes.post('/productionstatus/deleteall', (req, res) => DeleteAllProductionStatus.handle)

module.exports = routes