require('dotenv').config()

class DeviceLimitExcedeedError extends Error {
  constructor () {
    super()
    this.status = 422
    this.message = `You already have ${process.env.DEVICE_LIMIT} registered devices`
  }
}

module.exports = DeviceLimitExcedeedError
