# Cypress-Cycymber-Allure Test enviroment


This project demonstrates an example of using the [Cypress framework](https://www.cypress.io/) and [Cucumber](https://cucumber.io/) tools on the site [telenyx.com](https://telnyx.com/).


## How to run:

-   clone this repo
-   install dependencies: `npm install`
-   run tests: `npm run test`
-   clear previous output `npm run allure:clear`
-   generate allure report: `npm run allure:report`
-   open report: `allure open`

## Allure report

-   is generated by github action on every push. See [.github/workflows/publish.yaml](.github/workflows/allure.yaml)
-   hosted with github pages. Check [allure-report](https://vvoldi.github.io/telnyx/)

