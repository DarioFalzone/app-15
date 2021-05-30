const page = require("./page");

class loginPage extends page {
	get inputUsername() {
		return $(`div[class="form_group"] > input[id="user-name"]`
        );
	}
	get inputPassword() {
		return $(`div[class="form_group"] > input[id="password"]`
        );
	}
	get textError() {
		return $(`div[class="error-message-container error"] > h3`).getText();
	}
  get loginBtn() {
		return $(`form > input[id="login-button"]`);
	}

	testLogin(username, password) {
		this.inputUsername.setValue(username);
		this.inputPassword.setValue(password);
		this.loginBtn.click();
	}
}
module.exports = new loginPage();
