const cartDom = document.querySelector(".in-cart");
const cartItemsTotal = document.querySelector(".cart-items-total");
const clearCartBtn = document.querySelector(
  ".btn.btn-outline-primary.clear-cart"
);
const cartContent = document.querySelector(".cart-content");
const cartItems = document.querySelector(".cart-items");

class Products {
  async fetchProduct() {
    try {
      let data = await fetch("products.json");
      let items = await data.json();
      let products = items.products;
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  renderCartDOM(item) {
    let cartItems = "";
    item.forEach((product) => {
      cartItems += `
        <tr class="cart-content">
        <td>
        <img
        width="200px"
        height="200px"
        style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        src=${product.imgUrl}
        />
        <div>
        <h5>${product.name}</h5>
        </div>
        </td>
        <td style="font-size: 20px;">
        <br />
        <br />
        <i class="fas fa-chevron-left" data-id=${product._ID}></i>
        &nbsp; ${product.quantity} &nbsp; 
        <i class="fas fa-chevron-right" data-id=${product._ID}></i>
        </td>
        <td style="font-size: 20px;">
        <br />
        <br />
        $${product.price} &nbsp;
        </td>
        <td style="font-size: 20px;">
        <br />
        <br />
        $${parseFloat((product.price * product.quantity).toFixed(2))}
        </td>
        <td>
        <br />
        <br />
        <button class="remove-cart" style="background: transparent; border: none;" data-id=${
          product._ID
        }>
        &nbsp; &#10006; &nbsp;
        </button> 
        </td>
        </tr>
        
        `;
    });
    cartDom.innerHTML = cartItems;
  }
  cartAdjust() {
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });
    cartDom.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-chevron-left")) {
        let decreaseQty = event.target;
        let id = +decreaseQty.dataset.id;
        let items = Storage.getCartItems();
        if (items.length === 0) {
          localStorage.clear();
        }
        let quantity = items.find((item) => item._ID === +id);
        let qty = (quantity.quantity -= 1);
        console.log(qty);
        // Storage.saveInCart(items);

        if (qty <= 0) {
          items = items.filter((item) => item._ID !== +id);
          this.renderCartDOM(items);
          Storage.saveInCart(items);
          this.cartTotal();
          // window.location.reload(true);
        } else {
          let index = items.indexOf(quantity);
          items[index] = quantity;
          this.renderCartDOM(items);
          Storage.saveInCart(items);
          this.cartItemsValues();

          this.cartTotal();
        }
      }
      if (event.target.classList.contains("fa-chevron-right")) {
        let decreaseQty = event.target;
        let id = +decreaseQty.dataset.id;
        let items = Storage.getCartItems();
        let quantity = items.find((item) => item._ID === +id);
        quantity.quantity += 1;
        Storage.saveInCart(items);

        let index = items.indexOf(quantity);
        items[index] = quantity;
        this.renderCartDOM(items);
        Storage.saveInCart(items);
        this.cartItemsValues();

        this.cartTotal();
      }
    });
  }
  async clearCart() {
    localStorage.clear();
    const products = await new Products().fetchProduct();
    Storage.saveProductOnload(products);
    this.renderCartDOM([]);
    this.cartTotal()
    this.cartItemsValues();
  }
  removeCart() {
    const cartButtons = [...document.querySelectorAll(".remove-cart")];
    cartButtons.forEach((button) => {
      let id = +button.dataset.id;
      button.addEventListener("click", () => {
        let removedCart = Storage.getCartItems().find(
          (item) => item._ID === id
        );
        let inCart = Storage.getCartItems().filter(
          (item) => item._ID !== removedCart._ID
        );
        Storage.saveInCart(inCart);
        this.cartItemsValues();
        this.renderCartDOM(inCart);
        this.cartTotal();
        this.removeCart();
        if (inCart.length === 0) {
          this.clearCart();
        }
      });
    });
  }
  cartTotal() {
    let total = Storage.getCartItems();
    let amount = total.map((item) => item.price * item.quantity);
    let cartAmount = amount.reduce((a, b) => a + b, 0);
    let num = parseFloat(cartAmount.toFixed(2));
    cartItemsTotal.innerHTML = `$${num}`;
  }
  cartItemsValues() {
    let qty = Storage.getCartItems()
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
    cartItems.innerHTML = qty;
  }
  // cartItemsValues() {
  //   let qty = Storage.getCartTotal().length;

  //   cartItems.innerHTML = qty;
  // }
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
  ui.renderCartDOM(cartProducts);
  ui.cartAdjust();
  ui.removeCart();
  ui.cartTotal();
  ui.cartItemsValues();
});
