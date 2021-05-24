class loginForm {
	get userEmail() {
		return $('#login-email');
	}

	get userPassword() {
		return $('#login-pass');
	}

	get loginButton() {
		return $('#button-send');
	}

  get errorText() {
		return $('#message-text');
	}

  testLogin(email, password) {
    this.userEmail.setValue(email);
    this.userPassword.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new loginForm();