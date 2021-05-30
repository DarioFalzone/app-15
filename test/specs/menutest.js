const loginPage = require('../pageobjects/login.page');
const menuSection = require('../pageobjects/menu.section');
describe("Social Media Tests", () => {
  function browserPause() {
		browser.pause(2500);
	}
  function inventoryUrl() {
		expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
	}
  describe('Login ok - standard_user', () => {
    it('standard user is logged in', () => {
      loginPage.open();
      loginPage.testLogin('standard_user', 'secret_sauce');
      browserPause();
      inventoryUrl();
    });
  });
});