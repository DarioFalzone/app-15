const registerForm = require('../pageobjects/register.page');

describe('Register page - ¡go to find error!', () => {
	function pauseTime() {
		browser.pause(1700);
	}

	const pageLog = 'https://dariofalzone.github.io/problem10-rr/register.html';

	describe('Test form register with correct information', () => {
		it('Go to register page, write correct information', () => {
			browser.url(pageLog);
			registerForm.testRegister(
				'dario',
				'dario95@gmail.com',
				'dario789',
				'dario789'
			);
			expect(registerForm.errorText).toHaveText('Every validation has passed');
			pauseTime();
		});

		it('Go to register page, write correct information, preset reset button', () => {
			browser.url(pageLog);
			registerForm.testReset(
				'dario',
				'dario95@gmail.com',
				'dario789',
				'dario789'
			);
			expect(registerForm.errorText).toHaveText('');
			pauseTime();
		});
	});

	describe('Test input password', () => {
		it('Go to login page, write incorrect pass (not number in pass)', () => {
			browser.url(pageLog);
			registerForm.testRegister('dario', 'dario95@gmail.com', 'dario', 'dario');
			expect(registerForm.errorText).toHaveText(
				'Please enter a password with one number minimum'
			);
			pauseTime();
		});
	});

	describe('Test input email', () => {
		it('Go to login page, write incorrect information', () => {
			browser.url(pageLog);
			registerForm.testRegister('dario', 'dario95.com', 'dario1', 'dario1');
			expect(registerForm.errorText).toHaveText(
				'The email entered is not valid'
			);
			pauseTime();
		});
	});

	describe('Test input password are not the same', () => {
		it('Go to login page, write no same pass', () => {
			browser.url(pageLog);
			registerForm.testRegister(
				'dario',
				'dario95@gmail.com',
				'dario',
				'dario12'
			);
			expect(registerForm.errorText).toHaveText(
				'The passwords are not the same'
			);
			pauseTime();
		});
	});
});
