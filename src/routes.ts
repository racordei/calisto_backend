import express from 'express'
import { CreateWorkorderController } from './controllers/CreateWorkorderController'
import { FindCustomerController } from './controllers/FindCustomerController'
import { FindWorkorderByCustomerController } from './controllers/FindWorkorderByCustomerController'
import { FindWorkorderByHexIDController } from './controllers/FindWorkorderByHexIDController'
import { FindWorkorderByHexIDListController } from './controllers/FindWorkorderByHexIDListController'

const routes = express.Router()

const findWorkorderByHexID = new FindWorkorderByHexIDController()
const findWorkorderByHexIDList = new FindWorkorderByHexIDListController()
const findWorkorderByCustomer = new FindWorkorderByCustomerController()
const createWorkorder = new CreateWorkorderController()

const findCustomer = new FindCustomerController()

routes.get('/workorder/:hexid', findWorkorderByHexID.handle)
routes.post('/workorders', findWorkorderByHexIDList.handle)
routes.get('/workorders/:customername', findWorkorderByCustomer.handle)
routes.post('/workorder/', createWorkorder.handle)

routes.get('/customers/', findCustomer.handle)

export default routes
