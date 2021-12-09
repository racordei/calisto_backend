const ProductionStatus = require('../models/ProductionStatus')

module.exports = {
  async index(req, res) {
    const productionStatus = await ProductionStatus.findAll()
      .catch((e) => res.json({ error: e.message }))
    return res.json(productionStatus)
  },

  async store(req, res) {
    const { customername, inputfilename, hexid, productname, quantity } = req.body

    let action = await ProductionStatus.findOne({ where: { hexid } })
    if (action) {
      await action.update({ customername, inputfilename, productname, quantity })
    } else {
      action = await ProductionStatus.create({ customername, inputfilename, hexid, productname, quantity })
    }

    return res.json(action)
  }
}