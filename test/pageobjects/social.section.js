const page = require("./page");
class socialSection extends page {
	get btnFb() {
		return $('a[href="https://www.facebook.com/saucelabs"]');
	}
	get btnTw() {
		return $('a[href="https://twitter.com/saucelabs"]');
	}
	get btnLn() {
		return $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
	}
  get anchorFb() {
		return $('a[href="https://www.facebook.com/saucelabs"]');
	}
  get anchorTw() {
		return $('li[class="social_twitter"] > a');
	}
  get anchorLn() {
		return $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
	}
}
module.exports = new socialSection();