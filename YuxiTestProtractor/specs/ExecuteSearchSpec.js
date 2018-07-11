var SearchPage = require('../pages/SearchPage');
var GlobalActivities = require('../pages/GlobalActivities');

describe('Execute a search on Google', function() {

	it('Search on Google', function() {
		GlobalActivities.enterThePage("https://www.google.com.co/");
		SearchPage.setSearchParameter("gmail");
		SearchPage.pressSearchGoogleButton();
		SearchPage.verifySearchResult("Gmail - Google", "https://www.google.com/gmail/");
	});
	
	it('Navigate to page researched', function() {
		GlobalActivities.enterThePage("https://www.google.com.co/");
		SearchPage.setSearchParameter("gmail");
		SearchPage.pressSearchGoogleButton();
		SearchPage.enterTheResult("Gmail - Google");
		SearchPage.verifyEntryToThePage("Gmail");
	});
});