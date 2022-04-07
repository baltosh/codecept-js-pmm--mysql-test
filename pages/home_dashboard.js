const { I } = inject();

module.exports = {

  buttons: {
    pageName: '//button[text()="Home Dashboard"]',
  },
    
  isOpen() {
    I.waitForElement(this.buttons.pageName, 5);
    I.seeElement(this.buttons.pageName);
  }
}
