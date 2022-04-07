const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      ignoreHTTPSErrors : true
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
    homeDashboardPage: "./pages/home_dashboard.js",
    mysqlInstanceSummaryPage: "./pages/mysql_instance_summary.js",

    sideMenuFragment: "./fragments/side_menu.js",
    toolbarFragment: "./fragments/toolbar.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'

}