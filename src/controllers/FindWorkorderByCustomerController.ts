import { Request, Response } from 'express'
import Workorder from '../models/Workorder'
import { ExceptionHandler } from '../utils/ExceptionHandler'

export class FindWorkorderByCustomerController {
  async handle(req: Request, res: Response) {
    const { customername } = req.params

    try {
      const objects = await Workorder.findAll({
        where: { customername },
        // limit: 1000,
      })
      res.json(objects)
    } catch (error) {
      ExceptionHandler(res, { error })
    }
  }
}
