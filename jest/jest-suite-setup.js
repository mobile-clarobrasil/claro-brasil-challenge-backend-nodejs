const Device = require('../models').Device

module.exports = async () => {
  await Device.destroy({where: {}})
}
