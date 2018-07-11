var LoginPage = require('../pages/LoginPage');
var EmailPage = require('../pages/EmailPage');
var GlobalActivities = require('../pages/GlobalActivities');

describe('Send email', function() {

	it('Send an email to user account', function() {
		GlobalActivities.enterThePage("https://www.google.com.co/gmail/");
		LoginPage.setEmail("robotforautomationtest@gmail.com");
		LoginPage.pressNextButton();
		LoginPage.pressPassword("robotsecret");
		LoginPage.submitFormulary();
		EmailPage.pressComposeButton();
		EmailPage.setTo("victor.giraldo@yuxiglobal.com");
		EmailPage.setSubject("Test");
		EmailPage.setMessageBody("This is an auto-generated mail for test");
		EmailPage.pressSendButton();
		EmailPage.pressViewMessageLink();
		EmailPage.verifySendMessage();
	});
});