const ProductionStatus = require('../models/ProductionStatus')

class DeleteAllProductionStatusController {
  async handle(req, res) {
    await ProductionStatus.destroy({
      where: {},
      truncate: true
    })

    res.json({ status: 'success' })
  }
}

module.exports = { DeleteAllProductionStatusController }