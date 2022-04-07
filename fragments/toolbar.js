const { I } = inject();

module.exports = {
  buttons: {
    refresh: '//button[@aria-label="RefreshPicker run button"]'
  },

  refreshPage(){
    I.moveCursorTo(this.buttons.refresh)
    I.click(this.buttons.refresh)
  }
}
