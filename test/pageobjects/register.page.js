class registerForm {
  get registerName() {
		return $('#register-name');
	}

	get userEmail() {
		return $('#register-email');
	}

	get userPassword() {
		return $('#register-password');
	}

  get userConfirmPass(){
    return $('#re-password');
  }

	get registerButton() {
		return $('#button-send');
	}

  get resetButton() {
		return $('#button-reset');
	}

  get errorText() {
		return $('#message-text');
	}

  testRegister(name, email, password, rePassword) {
    this.registerName.setValue(name);
    this.userEmail.setValue(email);
    this.userPassword.setValue(password);
    this.userConfirmPass.setValue(rePassword);
    this.registerButton.click();
  }

  testReset(name, email, password, rePassword) {
    this.registerName.setValue(name);
    this.userEmail.setValue(email);
    this.userPassword.setValue(password);
    this.userConfirmPass.setValue(rePassword);
    this.resetButton.click();
  }
}

module.exports = new registerForm();