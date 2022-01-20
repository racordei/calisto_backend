import { Request, Response } from 'express'
import { Op } from 'sequelize'
import Workorder from '../models/Workorder'
import { ExceptionHandler } from '../utils/ExceptionHandler'

export class FindWorkorderByHexIDListController {
  async handle(req: Request, res: Response) {
    const hexids = req.body

    try {
      const objects = await Workorder.findAll({
        where: { hexid: { [Op.in]: hexids } },
      })
      res.json(objects)
    } catch (error) {
      ExceptionHandler(res, { error })
    }
  }
}
