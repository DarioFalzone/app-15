const loginForm = require('../pageobjects/login.page');

describe('Login page - ¡go to find error!', () => {
	function pauseTime() {
		browser.pause(1500);
	}

	const pageLog = 'https://dariofalzone.github.io/problem10-rr/index.html';

	describe('Test email input', () => {
		it('Go to login page, write correct information', () => {
			browser.url(pageLog);
			loginForm.testLogin('dario95@gmail.com', 'dario789');
			expect(loginForm.errorText).toHaveText('Every validation has passed');
			pauseTime();
		});

		it('Go to login page, write incorrect information', () => {
			browser.url(pageLog);
			loginForm.testLogin('dario95.com', 'dario789');
			expect(loginForm.errorText).toHaveText('The email entered is not valid');
			pauseTime();
		});
	});

	describe('Test password input', () => {
		it('Go to login page, write incorrect pass (not number in pass)', () => {
			browser.url(pageLog);
			loginForm.testLogin('dario95@gmail.com', 'dario');
			expect(loginForm.errorText).toHaveText(
				'Please enter a password with one number minimum'
			);
			pauseTime();
		});
	});
});
