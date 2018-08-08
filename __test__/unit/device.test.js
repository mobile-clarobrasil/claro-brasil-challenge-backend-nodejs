const sandbox = require('sinon').createSandbox()
const Device = require('../../models').Device
require('dotenv').config()

afterEach(() => {
  sandbox.restore()
})

describe('DEVICE UNIT TEST', () => {
  describe('when a device is created and there are other three devices in the base', () => {
    it('should throw a DeviceLimitExcedeedError', async () => {
      const payload = {
        user_id: 123,
        device_name: 'Iphone de teste',
        device_model: 'apple iphone'
      }

      const persistedDevices = [{...payload}, {...payload}, {...payload}]
      sandbox.stub(Device, 'findAll').returns(persistedDevices)

      try {
        await Device.create(payload)
      } catch (error) {
        expect(error.message).toBe(`You already have ${process.env.DEVICE_LIMIT} registered devices`)
      }
    })
  })
})
