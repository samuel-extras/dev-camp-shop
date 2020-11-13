const productDom = document.querySelector(".products-row");
const cartItems = document.querySelector(".cart-items");
const cartItemsTotal = document.querySelector(".cart-items-total");

let cart = [];
let cartTotal = [];

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
  renderProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
            <article>
                <div class="info">
                  
                  <span>
                    <a
                      href="product${product._ID}.html"
                      class="mfp-open"
                      data-title="Quick wiew"
                      ><i class="fa fa-eye"></i
                    ></a>
                  </span>
                </div>
                <button class="btn cart-btn" data-id=${product._ID}>
                  <i class="fas fa-shopping-cart" data-id=${product._ID}> ADD TO CART</i>
                </button>
                <div class="figure-grid">
                  <div class="image thumb">
                    <a href="product${product._ID}.html" class="mfp-open">
                      <img
                      src=${product.imgUrl}
                        alt="Nike footwear"
                        width="360"
                        class="product-img"
                      />
                    </a>
                  </div>
                  <div class="text">
                    <h6 class="title ">
                      <a href="product${product._ID}.html">${product.name}</a>
                    </h6>
                    <sup>$${product.price}-</sup>
                  </div>
                </div>
              </article>
           
            `;
    });
    productDom.innerHTML = result;
  }
  allCartBtn() {
    const buttons = [...document.querySelectorAll(".btn.cart-btn")];
    buttons.forEach((button) => {
      let id = +button.dataset.id;

      button.addEventListener("click", () => {
        let cartItems = {
          ...Storage.getProductFromStorage(+id),
          quantity: 1,
        };
        let inCart = cart.find((item) => item._ID === cartItems._ID);
        if (!inCart) {
          cart = [...cart, cartItems];
          Storage.saveCart(cart);
          this.cartItemsValues();

        } else {
          
          let newCart= Storage.getCartItems() 
          let quantity = newCart.find((item) => item._ID === +id);
          let index = newCart.indexOf(quantity)
           newCart[index] = {...quantity, quantity: quantity.quantity+1}
          Storage.saveCart(newCart)
          
          cartTotal=[...Storage.getCartTotal(), quantity]
          Storage.saveTotalCart(cartTotal)
          this.cartItemsValues()   
        }
      });
    });
  }
  cartItemsValues() {
    let qty = [...Storage.getCartItems()]
       .map((item) => item.quantity)
       .reduce((a, b) => a + b, 0);
    cartItems.innerHTML = qty;
  }
  cartSetUp() {
    cart = Storage.getCartItems();
    this.cartItemsValues(cart);
  }
}
class Storage {
  static saveProductOnload(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static saveCart(cart) {
    localStorage.setItem("carts", JSON.stringify(cart));
  }
  static saveTotalCart(cart) {
    localStorage.setItem("cartsTotal", JSON.stringify(cart));
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
  static getProductFromStorage(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product._ID === id);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();
  ui.cartSetUp();
  products
    .fetchProduct()
    .then((products) => {
      ui.renderProducts(products);
      Storage.saveProductOnload(products);
    })
    .then(() => {
      ui.allCartBtn();
    });
});
