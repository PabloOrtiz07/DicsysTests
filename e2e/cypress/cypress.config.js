/** CODIGO QUE FUNCIONA */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  reporter: 'junit',
  reporterEnabled: "mocha-junit-reporter, mochawesome",
      mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/junit/results-[hash].xml"
    },
  reporterOptions: {
      mochaFile: 'cypress/reports/results-[hash].xml',
      reportDir: "cypress/results/mochawesome",
      overwrite: false,
      html: false,
      json: true
    },
  e2e: {
    specPattern: "**/*.cy.*",
    excludeSpecPattern: "**/*.mp4",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
});
