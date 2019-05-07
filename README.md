## Visual regression service for WebdriverIO + BrowserStack

## Setup
* Clone the repo
* Install dependencies `npm install`
* You can setup environment variables `wdio.conf.js` file with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)

user: process.env.BROWSERSTACK_DEMO_USER,
key: process.env.BROWSERSTACK_DEMO_KEY,

## Running your tests
run `npm test`

## Note
- The WebDriverIO Sample script uses [wdio-visual-regression-service](https://github.com/zinserjan/wdio-visual-regression-service), [WebdriverIO Browserstack Service](https://github.com/itszero/wdio-browserstack-service)
- The screenshots captured are saved to the below folders within the project's main directory, while the test runs on BrowserStack:
1) Baseline screenshot - screenshots/baseline
2) Latest screenshot - screenshots/latest
3) Difference screenshot - screenshots/diff
