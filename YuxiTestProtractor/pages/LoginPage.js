var GlobalActivities = require('../pages/GlobalActivities');

var loginPage = function() {

	var emailInput = element(by.id('identifierId'));
	var NextButton = element(by.id('identifierNext'));
	var passwordInput = element(by.name('password'));
	var submitButton = element(by.id('passwordNext'));

	this.setEmail = function(value) {
		GlobalActivities.waitForElement(emailInput, 30);
		emailInput.sendKeys(value);
	};

	this.pressNextButton = function() {
		GlobalActivities.waitForElement(NextButton, 10);
		NextButton.click();
	};

	this.pressPassword = function(value) {
		GlobalActivities.waitForElement(passwordInput, 10);
		passwordInput.sendKeys(value);
	};

	this.submitFormulary = function() {
		GlobalActivities.waitForElement(submitButton, 10);
		submitButton.click();
	};

};
module.exports = new loginPage();