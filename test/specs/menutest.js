const loginPage = require('../pageobjects/login.page');
const menuSection = require('../pageobjects/menu.section');
describe('Test button menu after login success', () => {
  function browserPause() {
		browser.pause(3500);
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
  describe('Open sidebar', () => {
    it('Test - Click on "btn ,emi"', () => {
      menuSection.btnMenu;
      browserPause();
      inventoryUrl();
    });
  });
  describe('Button reset', () => {
    it('Test - Click on "btn reset"', () => {
      menuSection.btnReset;
      browserPause();
      inventoryUrl();
    });
  });
  describe('Button All Items', () => {
    it('Test - Click on "btn all items"', () => {
      menuSection.inventoryBtn;
      inventoryUrl();
      browserPause();
    });
  });
  describe('Button About', () => {
    it('Test - Click on "btn about"', () => {
      menuSection.btnAbout;
      browser.back();
      browserPause();
      inventoryUrl();
    });
  });
  describe('Button Logout', () => {
    it('Test - Click on "btn logout"', () => {
      inventoryUrl();
      menuSection.btnMenu;
      browserPause();
      menuSection.btnLogout;
    });
  });
});