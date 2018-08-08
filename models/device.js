'use strict'

const {Model, DataTypes} = require('sequelize')
const DeviceLimitExcedeedError = require('../errors/device_limit_exceeded_error')
require('dotenv').config()

module.exports = (sequelize) => {
  class Device extends Model {
    static init (sequelize) {
      return super.init({
        user_id: DataTypes.INTEGER,
        device_name: DataTypes.STRING,
        device_model: DataTypes.STRING
      }, {
        sequelize,
        underscored: true,
        hooks: {
          beforeCreate: Device.beforeCreate
        }
      })
    }

    static async beforeCreate (model) {
      const devices = await Device.findAll({where: {user_id: model.user_id}})

      if (devices.length === parseInt(process.env.DEVICE_LIMIT)) {
        throw new DeviceLimitExcedeedError()
      }
    }
  }

  return Device
}
