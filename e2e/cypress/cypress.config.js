const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.cy.*",
    //exclude: ["**/*.mp4"],
    excludeSpecPattern: "**/*.mp4",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    // Agregar la configuración del reporte aquí
    /* 
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quiet: true,
        overwrite: false,
        html: false,
        json: true
      }
    }
    */
  },
});
