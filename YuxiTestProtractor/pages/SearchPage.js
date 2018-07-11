var GlobalActivities = require('../pages/GlobalActivities');

var searchPage = function() {

	var searchInput = element(by.id('lst-ib'));
	var searchGoogleButton = element(by.name('btnK'));
	var googleLogoSearchResult = element(by.xpath("//*[@id='logo']/img"));
	var resultNameTitle = element(by.xpath("//*[@id='rso']/div[1]/div/div/div/div/h3/a"));
	var resultNameDescription = element(by.xpath("//*[@id='rso']/div[1]/div/div/div/div/div/div/div[1]/cite"));

	this.setSearchParameter = function(value) {
		GlobalActivities.waitForElement(searchInput, 30);
		searchInput.sendKeys(value);
		searchInput.sendKeys(protractor.Key.TAB);
	};

	this.pressSearchGoogleButton = function() {
		searchGoogleButton.click();
	};

	this.verifySearchResult = function(title, urlDescription) {
		expect(resultNameTitle.getText()).toEqual(title);
		expect(resultNameDescription.getText()).toEqual(urlDescription);
	};

	this.enterTheResult = function(parameter) {
		element(by.linkText(parameter)).click();
	};

	this.verifyEntryToThePage = function(title) {
		expect(browser.getTitle()).toEqual(title);
	};

};
module.exports = new searchPage();