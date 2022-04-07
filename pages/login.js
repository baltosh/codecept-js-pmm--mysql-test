const { I } = inject();

module.exports = {
  fields: {
    user: '//input[@name="user"]',
    password: '//input[@name="password"]'
  },
  buttons: {
    login: '//button[@aria-label="Login button"]',
    skip: '//button[@aria-label="Skip change password button"]'
  },
    
  login(user, password) {
    I.fillField(this.fields.user, user);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.login);
    I.click(this.buttons.skip);
  }
}
