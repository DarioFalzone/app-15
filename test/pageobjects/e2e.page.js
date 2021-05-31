const page = require("./page");
class endToEnd extends page {
  get btnProductOne() {
      return $('a[id="item_5_title_link"]').click();
  }
  get btnAddProductToCart() {
      return $('button[id="add-to-cart-sauce-labs-backpack"]').click();
  }
  get btnCancel() {
      return $('button[id="cancel"]').click();
  }
  get btnRemove() {
      return $('button[id="remove-sauce-labs-backpack"]').click();
  }
  get btnCart() {
      return $('a[class="shopping_cart_link"]').click();
  }
  get btnFinish() {
      return $('button[id="finish"]').click();
  }
  get btnCheckOut() {
      return $('button[id="checkout"]').click();
  }
  get btnContinueCheckOut() {
      return $('input[id="continue"]').click();
  }
  get btnBackToProduct() {
      return $('button[id="back-to-products"]').click();
  }
  get inputName() {
      return $('input[id="first-name"]');
  }
  get inputLastName() {
      return $('input[id="last-name"]');
  }
  get inputZipCode() {
      return $('input[id="postal-code"]');
  }
  testCheckOut(name, lastname, zipcode) {
      this.inputName.setValue(name);
      this.inputLastName.setValue(lastname);
      this.inputZipCode.setValue(zipcode);
  }
}
module.exports = new endToEnd();


