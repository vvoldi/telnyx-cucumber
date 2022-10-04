const cypress = require('cypress');

const cypressConfig = {
    video: true,
    browser: 'chrome',
    config: {
        specPattern: 'cypress/e2e/cucumber/*.feature'
    },
    env: {
        allure: true,
        allureReuseAfterSpec: true,
        stepDefinitions: `cypress/e2e/cucumber/**/*.js`
    }
};

// const cypressCucumberConfig = {
//     ...cypressConfig,
//     ...{
//         config: {
//             specPattern: 'cypress/e2e/cucumber/*.feature',
//             excludeSpecPattern: '**/*.cy.js'
//         }
//     }
// };

(async function () {
    await cypress.run(cypressConfig);
    // await cypress.run(cypressCucumberConfig);
})();
