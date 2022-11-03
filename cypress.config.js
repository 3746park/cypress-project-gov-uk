const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '4f6xa9',
  viewportHeight: 1400,
  viewportWidth: 1400,
  chromeWebSecurity: false,
  videoUploadOnPasses: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-terminal-report/src/installLogsPrinter')(on);
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})