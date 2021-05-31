const loginPage = require('../pageobjects/login.page');
const e2ePage = require('../pageobjects/e2e.page');
describe('Test button menu after login success', () => {
	function browserPause() {
		browser.pause(2000);
	}
	function inventoryUrl() {
		expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
	}
	describe('Login ok - standard_user', () => {
		it('standard user is logged in', () => {
			loginPage.open();
			loginPage.testLogin('standard_user', 'secret_sauce');
			browserPause();
			inventoryUrl();
		});
	});
	describe('Test - Buy a one product', () => {
		it('Product - add to cart', () => {
			e2ePage.btnProductLinkOne;
			e2ePage.btnAddToCart;
			browserPause();
		});
		it('Check cart', () => {
			e2ePage.btnAddToCart;
			e2ePage.btnShoppingCart;
			browserPause();
		});
		it('Remove product inside the shopping cart', () => {
			e2ePage.btnRemoveCart;
			browserPause();
		});
		it('Finish and pay', () => {
			e2ePage.btnProductLinkOne;
			e2ePage.btnAddToCart;
			e2ePage.btnCart;
			e2ePage.btnCheckOut;
			e2ePage.testCheckOut('Dario', 'Flz', '8596');
			browserPause();
			e2ePage.btnContinueCheckOut;
			e2ePage.btnFinish;
			browserPause();
			e2ePage.btnBackToHome;
			browserPause();
		});
	});
});
