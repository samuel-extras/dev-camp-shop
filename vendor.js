const productDom = document.querySelector(".products-row");
const cartItems = document.querySelector(".cart-items");
const cartItemsTotal = document.querySelector(".cart-items-total");
const productCard = document.querySelector(".products-row");
const mfpOpen = document.querySelector(".mfp-open");

class UI {
  renderProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
            <article data-id=${product._ID} id="product">
                <div class="info">
                  
                  <span>
                    <a
                      data-id=${product._ID}
                      class="mfp-open"
                      data-title="Edit Product "
                      id="product"
                      ><i
                      data-id=${product._ID}
                       class="fa fa-pen"></i
                    ></a>
                  </span>
                </div>
                <button class="btn trash-btn" style="text-align: center; " data-id=${product._ID}>
                  <i class="fas fa-trash" data-id=${product._ID}> DELETE </i>
                </button>
                <div class="figure-grid">
                  <div class="image thumb">
                    <a  class="mfp-open">
                      <img
                      src=${product.imgUrl}
                        alt="Nike footwear"
                        width="360"
                        class="product-img"
                        data-id=${product._ID}
                        id="product"
                      />
                    </a>
                  </div>
                  <div class="text">
                    <h6 class="title ">
                      <a class="name" data-id=${product._ID}>${product.name}</a>
                    </h6>
                    <sup>$${product.price}-</sup>
                  </div>
                </div>
              </article>
           
            `;
    });
    productDom.innerHTML = result;
  }
  trashBtn() {
    let products = Storage.getproducts();
    const buttons = [...document.querySelectorAll(".btn.trash-btn")];
    buttons.forEach((button) => {
      let id = +button.dataset.id;

      button.addEventListener("click", () => {
        let productItem = Storage.getProductFromStorage(+id);
        products = products.filter(
          (product) => product._ID !== productItem._ID
        );
        Storage.saveProductOnload(products);
        this.renderProducts(products);
        this.trashBtn()
      });
    });
  }

  renderAddProduct() {
    document.querySelector("#add-product").addEventListener("click", (event) => {
    let id=+(event.target.dataset.id)
    Storage.saveId(id);
    window.location = "product-form.html";
    });
  }
  renderProductPage() {
    productCard.addEventListener("click", (event) => {
      let id = event.target.dataset.id;
      if (
        event.target.classList.contains("name") ||
        event.target.classList.contains("fa-pen") ||
        event.target.classList.contains("product-img")
      ) {
        Storage.saveId(id);
        window.location = "product-form.html";
      }
        
    });
  }
}
class Storage {
  static saveProductOnload(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static saveId(id) {
    localStorage.setItem("productId", JSON.stringify(id));
  }

  static getproducts() {
    return localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
  }

  static getProductFromStorage(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product._ID === id);
  }
}
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.zoom = "90%";

  const products = Storage.getproducts();
  const ui = new UI();

  ui.renderProducts(products);
  Storage.saveProductOnload(products);

  
    ui.trashBtn();
  

  ui.renderProductPage();
  ui.renderAddProduct();
});
