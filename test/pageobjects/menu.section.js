const page = require("./page");
class menuSection extends page {
	get btnMenu() {
		return $('button[id="react-burger-menu-btn"]').click();
	}
  get btnAbout() {
    return $('a[id="about_sidebar_link"]').click();
	}
  get btnLogout() {
		return $('a[id="logout_sidebar_link"]').click();
	}
  get btnReset() {
	  return $('a[id="reset_sidebar_link"]').click();
  }
  get sidebarBtn() {
      return $('a[id="inventory_sidebar_link"]').click();
  }
}
module.exports = new menuSection();