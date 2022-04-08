const { I } = inject();

module.exports = {
  dropdowns: {
    pmmDasboards: '//div[@data-testid="sidemenu-item-pmm"]'
  },

  selectPmmDashboard(dashboard, subDashboard){
    I.moveCursorTo(this.dropdowns.pmmDasboards)
    I.moveCursorTo('//li[*[text()="' + dashboard + '"]]')
    I.click('//li[*[text()="' + subDashboard + '"]]')
  }
}
