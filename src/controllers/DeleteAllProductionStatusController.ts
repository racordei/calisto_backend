import { Request, Response } from "express"
import Workorder from "../models/Workorder"

export class DeleteAllWorkorderController {
  async handle(req: Request, res: Response): Promise<any> {
    await Workorder.destroy({
      where: {},
      truncate: true
    })

    res.json({ status: 'success' })
  }
}