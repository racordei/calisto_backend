import { Request, Response } from 'express'
import Workorder from '../models/Workorder'
import { ExceptionHandler } from '../utils/ExceptionHandler'

const createSingle = async (req: Request, res: Response) => {
  try {
    const { hexid } = req.body
    const [workorder, created] = await Workorder.findOrCreate({
      where: { hexid },
    })

    if (!created && workorder) {
      const updatedWorkorder = await workorder.update(req.body)
      return res.json(updatedWorkorder)
    } else if (res.statusCode === 200) {
      return res.json(workorder)
    }
  } catch (error) {
    ExceptionHandler(res, { error })
  }
}

const createMultiple = async (req: Request, res: Response) => {
  try {
    await Workorder.bulkCreate(req.body, {
      updateOnDuplicate: [
        'customername',
        'inputfilename',
        'batchname',
        'productname',
        'productalias',
        'producttype',
        'productstatus',
        'additionalhexid',
        'creationdate',
        'duedate',
        'finisheddate',
        'shippingdate',
        'comments',
        'wo_status',
        'quantity',
        'priorityquantity',
        'excludedquantity',
        'mainplastic',
        'planningid',
        'packageid',
        'sequenceinpackage',
        'processstartdate',
        'processenddate',
        'processcosttime',
        'initcmfdate',
        'initcmfinfo',
        'matchingstartdate',
        'matchingenddate',
      ],
    })

    res.json({ status: 'success' })
  } catch (error) {
    ExceptionHandler(res, { error })
  }
}

export class CreateWorkorderController {
  async handle(req: Request, res: Response) {
    if (req.body instanceof Array) {
      return createMultiple(req, res)
    } else {
      return createSingle(req, res)
    }
  }
}
