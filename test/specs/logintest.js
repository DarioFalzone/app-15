const loginPage = require('../pageobjects/login.page');

describe("Test - existence of form elements (3 tests)", () => {
    function browserPause() {
        browser.pause(500);
    }
    beforeEach("Open browser", () => {
        loginPage.open();
    });
    it("Input Username Exist", () => {
        browserPause();
        expect(loginPage.inputUsername).toExist;
        expect(loginPage.inputUsername).toBeClickable;
    });
    it("Input Password Exist", () => {
        browserPause();
        expect(loginPage.inputPassword).toExist;
        expect(loginPage.inputPassword).toBeClickable;
    });
    it("Login Button Exist", () => {
        browserPause();
        expect(loginPage.submitBtn).toExist;
        expect(loginPage.submitBtn).toBeClickable;
    });
});

describe('Test login form', () => {
    function browserPause() {
        browser.pause(1000);
    }
    function inventoryUrl() {
        expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    }
    beforeEach("Open browser", () => {
        loginPage.open();
    });

    describe('Test - credential testing', () => {
        it('Login Fail - Fields totally empty', () => {
            loginPage.testLogin('', '');
            expect(loginPage.textError).toBe('Epic sadface: Username is required');
            browserPause();
        });
        it('Login Fail - Empty password', () => {
            loginPage.testLogin('darioeflz', '');
            expect(loginPage.textError).toBe(
                'Epic sadface: Password is required'
            );
            browserPause();
        });
        it('Login Fail - Empty username', () => {
            loginPage.testLogin('', 'secret_sauce');
            expect(loginPage.textError).toBe('Epic sadface: Username is required');
            browserPause();
        });
    });

    describe('Test - random credentials', () => {
        it('Login Fail - non-existent username and password', () => {
            loginPage.testLogin('darioeflz', 'dar591');
            expect(loginPage.textError).toBe(
                'Epic sadface: Username and password do not match any user in this service'
            );
            browserPause();
        });
        it('Login Fail - password wrong', () => {
            loginPage.testLogin('standard_user', 'dar591');
            expect(loginPage.textError).toBe(
                'Epic sadface: Username and password do not match any user in this service'
            );
            browserPause();
        });
        it('Login Fail - username wrong', () => {
            loginPage.testLogin('darioeflz', 'secret_sauce');
            expect(loginPage.textError).toBe(
                'Epic sadface: Username and password do not match any user in this service'
            );
            browserPause();
        });
    });

    describe('Test - correct credentials', () => {
        it('Login ok - standard_user', () => {
            loginPage.testLogin('standard_user', 'secret_sauce');
            browserPause();
            inventoryUrl();
        });
        it('Login ok - problem_user', () => {
            loginPage.testLogin('problem_user', 'secret_sauce');
            browserPause();
            inventoryUrl();
        });
        it('Login ok - performance_glitch_user', () => {
            loginPage.testLogin('performance_glitch_user', 'secret_sauce');
            browserPause();
            inventoryUrl();
        });
        it('Login ok - locked_out_user', () => {
            loginPage.testLogin('locked_out_user', 'secret_sauce');
            browserPause();
            expect(loginPage.textError).toBe(
                'Epic sadface: Sorry, this user has been locked out.'
            );
        });
    });
});