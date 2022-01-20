import { Request, Response } from 'express'
import { QueryTypes } from 'sequelize'
import sequelizeConnection from '../config/database'
import Workorder from '../models/Workorder'
import { ExceptionHandler } from '../utils/ExceptionHandler'

export class FindCustomerController {
  async handle(req: Request, res: Response) {
    try {
      const sql =
        'SELECT DISTINCT(customername) customername FROM production_status'
      const objects = await sequelizeConnection.query(sql, {
        type: QueryTypes.SELECT,
        model: Workorder,
        mapToModel: true,
      })
      res.json((objects || []).map((object) => object.customername))
    } catch (error) {
      ExceptionHandler(res, { error })
    }
  }
}
