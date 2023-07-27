const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.cy.*",
    excludeSpecPattern: "**/*.mp4",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
  component: {
    supportFile: false,
  },
});
