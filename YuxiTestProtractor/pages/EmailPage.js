var GlobalActivities = require('../pages/GlobalActivities');

var subject;
var messageBody;

var emailPage = function() {

	var composeButton = element(by.xpath(".//*[text()= 'COMPOSE']"));
	var toInput = element(by.name('to'));
	var subjectInput = element(by.name('subjectbox'));
	var messageBodyInput = element(By.css(".Am.Al.editable.LW-avf"));
	var sendButton = element(by.xpath(".//*[text()= 'Send']"));
	var viewMessageLink = element(by.id('link_vsm'));
	var textToVerify = element(by.xpath("//*[text()= 'Move to Inbox']"));
	
	this.pressComposeButton = function() {
		composeButton.click();
	};

	this.setTo = function(value) {
		GlobalActivities.waitForElement(toInput, 10);
		toInput.click();
		toInput.sendKeys(value);
		toInput.sendKeys(protractor.Key.TAB);
	};

	this.setSubject = function(value) {
		subjectInput.click();
		subjectInput.sendKeys(value);
		subject = value;
	};

	this.setMessageBody = function(value) {
		messageBodyInput.click();
		messageBodyInput.sendKeys(value);
		messageBody = value;
	};

	this.pressSendButton = function() {
		GlobalActivities.waitForElement(sendButton, 10);
		sendButton.click();
	};

	this.pressViewMessageLink = function() {
		GlobalActivities.waitForElement(viewMessageLink, 10);
		viewMessageLink.click();
	};

	this.verifySendMessage = function() {
		GlobalActivities.waitForElement(textToVerify, 10);
		expect(element(by.xpath("//*[contains(., '" + subject + "')]")).isDisplayed()).toEqual(true);
		expect(element(by.xpath("//*[contains(., '" + messageBody + "')]")).isDisplayed()).toEqual(true);
	};

};
module.exports = new emailPage();