import { Request, Response } from 'express'
import Workorder from '../models/Workorder'
import { ExceptionHandler } from '../utils/ExceptionHandler'

export class FindWorkorderByHexIDController {
  async handle(req: Request, res: Response) {
    const { hexid } = req.params

    try {
      const objects = await Workorder.findOne({ where: { hexid } })
      res.json(objects)
    } catch (error) {
      ExceptionHandler(res, { error })
    }
  }
}
