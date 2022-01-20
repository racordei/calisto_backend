const ProductionStatus = require('../models/ProductionStatus')

class CreateProductionStatusController {
  async handle(req, res) {
    let objects = []
    let anyerror = false, errorobject = {}

    if (req.body instanceof Array) {
      objects.push(...req.body)
    } else {
      objects.push(req.body)
    }

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

    !anyerror && res.json({ status: 'success' })
  }
}

module.exports = CreateProductionStatusController