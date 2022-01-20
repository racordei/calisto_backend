const { options } = require('../models/ProductionStatus')
const ProductionStatus = require('../models/ProductionStatus')

module.exports = {
  async index(req, res) {
    const objects = await ProductionStatus.count()
      .catch((e) => res.json({ error: e.message }))
    return res.json(objects)
  },

  async store(req, res) {
    let objects = []
    let anyerror = false, errorobject = {}

    if (req.body instanceof Array) {
      objects.push(...req.body)
    } else {
      objects.push(req.body)
    }

    // ProductionStatus.destroy({
    //   where: {},
    //   truncate: true
    // })

    // const error = (e, object) => {
    //   anyerror = true
    //   errorobject = { message: e.message, object }
    //   console.log({ error: e.message })
    // }

    await ProductionStatus.bulkCreate(objects, {
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
        'matchingenddate']
    }).catch(e => console.log(e.message))

    // for (const index in objects) {
    //   const object = objects[index]

    //   const fields = {
    //     customername,
    //     inputfilename,
    //     batchname,
    //     hexid,
    //     productname,
    //     productalias,
    //     producttype,
    //     productstatus,
    //     additionalhexid,
    //     creationdate,
    //     duedate,
    //     finisheddate,
    //     shippingdate,
    //     comments,
    //     wo_status,
    //     quantity,
    //     priorityquantity,
    //     excludedquantity,
    //     mainplastic,
    //     planningid,
    //     packageid,
    //     sequenceinpackage,
    //     processstartdate,
    //     processenddate,
    //     processcosttime,
    //     initcmfdate,
    //     initcmfinfo,
    //     matchingstartdate,
    //     matchingenddate
    //   } = object

    //   await ProductionStatus.findOne({ where: { hexid } }).catch(e => error(e, object))
    //   if (object.productionStatus) {
    //     await object.productionStatus.update(fields).catch(e => error(e, object))
    //   } else {
    //     await ProductionStatus.bulkCreate(fields, { updateOnDuplicate: ['hexid'] }).catch(e => error(e, object))
    //   }

    //   if (anyerror) {
    //     res.status(500).json({ error: errorobject })
    //   }
    // }

    !anyerror && res.json({ status: 'success' })
  }
}