const { defineConfig } = require("cypress");
const createBuilder = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberpreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createesbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const build = createBuilder({
        plugins: [createesbuildPlugin(config)]
      })
      on("file:preprocessor", build);
      addCucumberpreprocessor(on, config);
      return config;
    },
    specPattern: "**/*.feature",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: false,
      json: true,
    }
  },
});
