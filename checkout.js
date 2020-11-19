const checkout = document.querySelector("#checkout");
const cartItemsTotal = document.querySelector("#cart-total");
const totalPrice = document.querySelector(".total-price");
const proceedCheckout = document.querySelector("#proceed");
const allCartTotal = document.querySelector(".cart-items");

proceedCheckout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location = "success.html";
});
class UI {
  renderCheckout(item) {
    let cartItems = "";
    item.forEach((product) => {
      cartItems += `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">${product.name}</h6>
                <img width="50px" height="50px" src=${product.imgUrl} alt="">
 <span class="qty-price">${product.quantity} x ${product.price}</span>
              </div>
              <span class="text-muted">$${
                product.quantity * product.price
              }</span>
            </li>
        `;
    });
    checkout.innerHTML = cartItems;
  }
  cartTotal() {
    let total = Storage.getCartItems();
    let amount = total.map((item) => item.price * item.quantity);
    let cartAmount = amount.reduce((a, b) => a + b, 0);
    let num = parseFloat(cartAmount.toFixed(2));
    totalPrice.innerHTML = `$${num}`;
  }
  cartItemsValues() {
    let qty = Storage.getCartItems()
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
    cartItemsTotal.innerHTML = qty;
    allCartTotal.innerHTML= qty;
  }
}
class Storage {
  static saveProductOnload(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static saveInCart(cart) {
    localStorage.setItem("carts", JSON.stringify(cart));
  }
  static getCartItems() {
    return localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];
  }
  static getCartTotal() {
    return localStorage.getItem("cartsTotal")
      ? JSON.parse(localStorage.getItem("cartsTotal"))
      : [];
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.zoom = "90%";

  const ui = new UI();

  let cartProducts = Storage.getCartItems();
  ui.renderCheckout(cartProducts);
  ui.cartItemsValues();
  ui.cartTotal();
});
