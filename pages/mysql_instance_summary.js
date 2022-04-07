const { assert, expect } = require("chai");

const { I, toolbarFragment } = inject();

module.exports = {

  buttons: {
    pageName: '//button[text()="MySQL Instance Summary"]',
    serviceName: '//div[label[text()="Service Name"]]/div'
  },
  nodeName: '//*[@class="panel-wrapper" and descendant::span[text()="Node"]]//*[@class="panel-content"]//a',

  isOpen() {
    I.waitForElement(this.buttons.pageName, 5);
    I.seeElement(this.buttons.pageName);
  },

  hasNode(serviceName, expectedNodeName){
    I.click(this.buttons.serviceName)
    I.click('//a[span[text()="' + serviceName + '"]]')
    toolbarFragment.refreshPage()
    I.waitForElement(this.nodeName, 5)
    I.see(expectedNodeName, this.nodeName)
  }
}
