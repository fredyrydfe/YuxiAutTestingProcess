var globalActivities = function() {

	this.enterThePage = function(url) {
		browser.ignoreSynchronization = true;
		browser.get(url);
	};
	
	this.waitForElement = function(element, seconds) {
		browser.wait(ExpectedConditions.elementToBeClickable(element), seconds * 1000, 'Failed the explicit wait');
	};

};
module.exports = new globalActivities();