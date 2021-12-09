const express = require('express')

function ExceptionHandling(req, res, f) {
  return f(req, res)
}

const ProductionStatusController = require('./controllers/ProductionStatusController')

const routes = express.Router()

routes.get('/', (req, res) => ExceptionHandling(req, res, ProductionStatusController.index))
routes.post('/insert', (req, res) => ExceptionHandling(req, res, ProductionStatusController.store))

module.exports = routes