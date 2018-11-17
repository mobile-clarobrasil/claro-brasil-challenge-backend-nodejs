
module.exports = {
  collectCoverage: true,
  coverageReporters: ['html', 'lcov'],
  testEnvironment: 'node',
  verbose: true,
  globalSetup: './jest/jest-suite-setup.js'
}
