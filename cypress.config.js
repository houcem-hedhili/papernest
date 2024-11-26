const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.papernest.com/onboarding?anonymous&anonymousId=test&id_text=1&destination=newspaper',
    testIsolation: false
  },
});
