const loginPage = require('../pageobjects/login.page');
const socialSection = require('../pageobjects/social.section');
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
  describe('Tests for social media section', () => {
    it('Social media button - existence check', () => {
      inventoryUrl();
      expect(socialSection.btnTw).toBeDisplayed();
      expect(socialSection.btnTw).toExist();
      expect(socialSection.btnFb).toBeDisplayed();
      expect(socialSection.btnFb).toExist();
      expect(socialSection.btnLn).toBeDisplayed();
      expect(socialSection.btnLn).toExist();
      browserPause();
    });
    it('Social media button - existence links', () => {
      inventoryUrl();
      expect(socialSection.anchorTw).toHaveLinkContaining(
        'https://twitter.com/saucelabs'
      );
      expect(socialSection.anchorFb).toHaveLinkContaining(
        'https://www.facebook.com/saucelabs'
      );
      expect(socialSection.anchorLn).toHaveLinkContaining(
        'https://www.linkedin.com/company/sauce-labs/'
      );
      browserPause();
    });
    it('Click on Twitter button - redirected ok', () => {
      inventoryUrl();
      socialSection.btnTw.click();
      browserPause();
      browser.switchWindow("https://twitter.com/saucelabs");
      expect(browser).toHaveUrl("https://twitter.com/saucelabs");
      browser.closeWindow();
      browser.switchWindow("https://www.saucedemo.com/inventory.html");
    });
    it('Click on Linkedin button - redirected ok', () => {
      inventoryUrl();
      socialSection.btnLn.click();
      browserPause();
      browser.switchWindow("https://www.linkedin.com/company/sauce-labs/");
      expect(browser).toHaveUrl("https://www.linkedin.com/company/sauce-labs/");
      browser.closeWindow();
      browser.switchWindow("https://www.saucedemo.com/inventory.html");
    });
    it('Click on Facebook button - redirected ok', () => {
      inventoryUrl();
      socialSection.btnFb.click();
      browserPause();
      browser.switchWindow("https://www.facebook.com/saucelabs");
      expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
      browser.closeWindow();
      browser.switchWindow("https://www.saucedemo.com/inventory.html");
    });
  });
});