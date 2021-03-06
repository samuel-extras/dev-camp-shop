const name = document.querySelector(".name");
const category = document.querySelector(".category");
const price = document.querySelector(".price");
const review = document.querySelector(".review");
const image = document.querySelector("#img");
const description = document.querySelector(".description");
const video1 = document.querySelector("#src1");
const video2 = document.querySelector("#src2");
const addProduct = document.querySelector("#add-product");
const productDom = document.querySelector("#product-dom");
const cartItems = document.querySelector(".cart-items");
const qty = document.querySelector("#qty");

let y = JSON.parse(localStorage.getItem("products"));
let id = JSON.parse(localStorage.getItem("productId"));
let x = y.find((item) => item._ID === +id);
name.innerHTML = x.name;
// document.querySelector(".description").innerHTML = x.description;
category.innerHTML = x.category;
price.innerHTML = x.price;
review.innerHTML = x.review;
image.setAttribute("src", x.imgUrl);
video1.setAttribute("src", x.videoUrl);
video2.setAttribute("src", x.videoUrl2);
description.innerHTML= x.description
  const allProducts = [
    {
      name: "Nike Air Force 1 High '07",
      category: "Air Force",
      description:
        "The legend lives on in the Nike Air Force 1 High '07, an update on the iconic AF-1 that offers classic court style and premium cushioning",
      price: 89.99,
      discount: 8,
      review: 4,
      imgUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oktc8rwsjw7st7scvqrd/air-force-1-high-07-shoe-tg72Lx.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/fee97ab1-5321-4007-9f33-63831fdfa291/video.webm",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90/88a5b5cb-9dc0-477f-875e-83d71ea00042/video.webm",
      _ID: 1,
    },
    {
      name: "Nike Air Force 1 '07",
      category: "Air Force",
      description:
        "Hoops in the park, Sunday BBQs and sunshine. The radiance lives on in the Nike Air Force 1 '07, the b-ball OG that puts a fresh spin on the features you know best: crisp leather, stitched overlays in classic all white and the perfect amount of flash to make you shine",
      price: 599.99,
      discount: 0,
      review: 5.5,
      imgUrl:
        "https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/gsuin11ptg5qgktmzoat/air-force-1-07-shoe-KyTDGepj.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/fnpfrqywv44pehh8o1ug/video.mp4",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90,vc_vp9/fnpfrqywv44pehh8o1ug/video.webm",

      _ID: 2,
    },
    {
      name: "Nike Air Max 270",
      category: "Air Max",
      description:
        "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours.",
      price: 929.99,
      discount: 10,
      review: 3,
      imgUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/awjogtdnqxniqqk0wpgf/air-max-270-shoe-nnTrqDGR.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/zvokg5z3idyccsel0ou1/video.mp4",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90,vc_vp9/zvokg5z3idyccsel0ou1/video.webm",
      _ID: 3,
    },
    {
      name: "Nike Air Max 90",
      category: "Air Max",
      description:
        "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort",
      price: 399.99,
      discount: 2,
      review: 6,
      imgUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a47b2ef9-8239-4e82-99fd-e6159c0df489/air-max-97-shoe-z3TlrlVN.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/ysiiv5of83izqjkmilr5/video.mp4",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90,vc_vp9/ysiiv5of83izqjkmilr5/video.webm",
      _ID: 4,
    },
    {
      name: "Nike Air Force 1 '07 LV8",
      category: "Air Force",
      description:
        "Elevate to legendary status in the Nike Air Force 1 '07 LV8. Refreshed colours highlight the premium details that landed this iconic design at the pinnacle of sneaker culture.",
      price: 89.99,
      discount: 9,
      review: 3,
      imgUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4825f9df-ce88-4886-be46-b7f5f1102c6a/air-force-1-07-lv8-shoe-ng2WcP.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/fnpfrqywv44pehh8o1ug/video.mp4",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90,vc_vp9/fnpfrqywv44pehh8o1ug/video.webm",
      _ID: 5,
    },
    {
      name: "Nike Mercurial Superfly 7 Elite MDS FG",
      category: "Mercurial",
      description:
        "Dream of speed and play fast in the Nike Mercurial Superfly 7 Elite MDS FG. A streamlined upper combines with a Nike Aerowtrac zone for high-speed play and supercharged traction",
      price: 29.99,
      discount: 0,
      review: 4,
      imgUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/014cc408-19a5-4d59-b839-1dc385aa327a/mercurial-superfly-7-elite-fg-football-boot-94j6sh.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/4e991bea-795f-4720-8a9f-89c871b69717/video.mp4",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90,vc_vp9/4e991bea-795f-4720-8a9f-89c871b69717/video.webm",
      _ID: 6,
    },
    {
      name: "Jordan Delta",
      category: "Jordan",
      description:
        "  The Jordan Delta has a design that's expressive and comfortable from the inside out. Made from a mix of materials, this shoe has plush, lightweight foam underfoot. It's meticulously crafted for a look and feel only Jordan Brand can deliver",
      price: 89.99,
      discount: 0,
      review: 4.5,
      imgUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2842d752-98fc-4a0a-9d32-42c61f58be3d/jordan-delta-shoe-BhH2tV.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/04a0c4f5-0b20-4507-8402-b7d151472243/video.mp4",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90,vc_vp9/04a0c4f5-0b20-4507-8402-b7d151472243/video.webm",
      _ID: 7,
    },
    {
      name: "Nike Air Max Plus III",
      category: "SB Blazer",
      description:
        "Featuring the same Tuned Air technology that originally put it in the sneaker history books, the Nike Air Max Plus III updates the look with TPU fused to the upper while paying homage to the iconic colour fade.",
      price: 129.99,
      discount: 3,
      review: 4,
      imgUrl:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d72a3e9b-bb1a-42ad-ba09-844e63adca00/air-max-plus-iii-shoe-vP80ld.jpg",
      videoUrl:
        "https://static.nike.com/a/videos/q_90,vc_vp9/fee97ab1-5321-4007-9f33-63831fdfa291/video.mp4",
      videoUrl2:
        "https://static.nike.com/a/videos/q_90,vc_vp9/fee97ab1-5321-4007-9f33-63831fdfa291/video.webm",
      _ID: 8,
    },
  ];

  class Products {
    async fetchProduct() {
      try {
        // let data = await fetch('products.json');
        // let items = await data.json();

        // let products = items.products;
        let products = allProducts;
        return products;
      } catch (error) {
        console.log(error);
      }
    }
  }
class UI {
  cartAdjust() {
    productDom.addEventListener("click", (event) => {
      if (event.target.classList.contains("fa-chevron-down")) {
        let items = Storage.getCartItems();
        if (items.length === 0) {
          localStorage.clear();
          window.location.reload(true);
        }
        let quantity = items.find((item) => item._ID === +id);
        let qty = (quantity.quantity -= 1);
        // Storage.saveInCart(items);

         if (qty === -1) {
           return
         } 
        if (qty === 0) {
          items = items.filter((item) => item._ID !== +id);
          Storage.saveCart(items);
          this.productQty();

          // window.location.reload(true);
        } else {
          let index = items.indexOf(quantity);
          items[index] = quantity;
          Storage.saveCart(items);
          this.cartItemsValues();
          this.productQty();
        }
      }
      if (event.target.classList.contains("fa-chevron-up")) {
        let cart = Storage.getCartItems()
        let cartItem = Storage.getProductFromStorage(+id);
        let inCart = cart.find((item) => item._ID === +id);

        if (!inCart) {
          let cartProduct = { ...cartItem, quantity: 1 };
          cart = [...Storage.getCartItems(), cartProduct];
          Storage.saveCart(cart);
          this.cartItemsValues();
          this.cartSetUp();
        } else {
           let items = Storage.getCartItems();
           let quantity = items.find((item) => item._ID === +id);
           quantity.quantity += 1;
           Storage.saveCart(items);

           let index = items.indexOf(quantity);
           items[index] = quantity;
           Storage.saveCart(items);
           this.cartItemsValues();
           this.productQty();
        }

       
      }
    });
  }
  productQty() {
    let quant = Storage.getCartItems().find((item) => item._ID === +id)
    if (quant){
     quant= quant.quantity;
      qty.innerHTML = quant;
    }else{
      qty.innerHTML = 0
    }
  }
  addToCartBtn() {
    addProduct.addEventListener("click", () => {
      let inCart = Storage.getCartItems().find((item) => item._ID === +id);
      let cartItem = Storage.getProductFromStorage(+id);

      if (!inCart) {
        let cartProduct = { ...cartItem, quantity: 1 };
        let cart = [...Storage.getCartItems(), cartProduct];
        Storage.saveCart(cart);
        this.cartItemsValues();
        this.cartSetUp();
        this.productQty();
      } else {
        let newCart = Storage.getCartItems();
        let target = newCart.find((item) => item._ID === +id);

        let index = newCart.indexOf(target);

        newCart[index] = { ...target, quantity: target.quantity + 1 };
        Storage.saveCart(newCart);

        this.cartItemsValues();
        this.productQty();
        this.cartSetUp();
      }
    });
  }

  cartItemsValues() {
    let qty = Storage.getCartItems()
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
    cartItems.innerHTML = qty;
  }

  cartSetUp() {
    let cart = Storage.getCartItems();
    this.cartItemsValues(cart);
    this.productQty()
  }
}
class Storage {
  static saveProductOnload(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static saveCart(cart) {
    localStorage.setItem("carts", JSON.stringify(cart));
  }
  static saveId(id) {
    localStorage.setItem("productId", JSON.stringify(id));
  }

  static getCartItems() {
    return localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];
  }

  static getProductFromStorage(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product._ID === id);
  }
}
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.zoom = "90%";

  products = new Products();
  const ui = new UI();
  products.fetchProduct().then((products) => {
    Storage.saveProductOnload(products);
  });
  ui.cartSetUp();
  ui.addToCartBtn();
  ui.cartAdjust();
});
