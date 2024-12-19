const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity: false,
  experimentalStudio: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    defaultCommandTimeout: 30000,
    viewportWidth: 1000,
    viewportHeight: 660,
    pageLoadTimeout:30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 60000,
 
  },
});