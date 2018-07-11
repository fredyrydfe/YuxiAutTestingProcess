exports.config = {
	directConnect : true,
	framework : 'jasmine',
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'specs/*Spec.js' ],

	onPrepare : () => {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(30000);
	},

	capabilities : {
		browserName : 'chrome',
		chromeOptions : {
			args : [
				'--disable-infobars',
				'--disable-extensions',
				'verbose',
				'log-path=/tmp/chromedriver.log'
			],
			prefs : {
				'profile.password_manager_enabled' : false,
				'credentials_enable_service' : false,
				'password_manager_enabled' : false
			}
		}
	}
}