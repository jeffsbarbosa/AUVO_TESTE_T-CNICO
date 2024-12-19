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
    //baseUrl: 'https://graduacao4.ung.digital',
    //specPattern: 'cypress/e2e/*/.{js,jsx,ts,tsx}',
     //https://graduacao5.uninorte.digital
     //https://graduacao4.uninassau.digital
     //https://graduacao4.unama.digital
     //https://graduacao4.uninorte.digital
     //https://graduacao4.unifacimed.digital
     //https://graduacao4.uninabuco.digital
     //https://graduacao4.ung.digital
  },
});