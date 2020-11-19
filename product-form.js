const inputName = document.querySelector("#inputName");
const inputCategory = document.querySelector("#inputCategory");
const inputPrice = document.querySelector("#inputPrice");
const inputReview = document.querySelector("#review");
const inputImgUrl = document.querySelector("#image");
const inputVideoUrl1 = document.querySelector("#video1");
const inputVideoUrl2 = document.querySelector("#video2");
const description = document.querySelector("#description");
const discount = document.querySelector("#discount");

let id = JSON.parse(localStorage.getItem("productId"));
let product = JSON.parse(localStorage.getItem("products"));

product = product.find((item) => item._ID === +id);
if (id === 0) {
  inputName.value = "";
  inputCategory.value = "";
  inputPrice.value = "";
  inputReview.value = "";
  inputImgUrl.value = "";
  inputVideoUrl1.value = "";
  inputVideoUrl2.value = "";
  description.value = "";
  discount.value = "";
}   

// const inputs =[...document.querySelectorAll(".form-control")]
// inputs.forEach(input=> {
//     let id = input.id
//     input.addEventListener("blur", ()=>console.log(input.value)
//     )
// })
// document.querySelector("form").addEventListener("submit", (e)=>{
//     e.preventDefault()
// })

const handleSubmit=(e)=>{
    e.preventDefault();
    let product = {
        name: inputName.value,
        category: inputCategory.value,
        description: description.value,
        price: inputPrice.value,
        discount: discount.value,
        review: inputReview.value,
        imgUrl: inputImgUrl.value,
        videoUrl: inputVideoUrl1.value,
        videoUrl2: inputVideoUrl2.value,
        _ID: Date.now(),
    };
    let storedProducts = JSON.parse( localStorage.getItem("products"))
    let products = [...storedProducts, product]
    localStorage.setItem("products", JSON.stringify(products))
    document.querySelector("#formElem").reset()
    console.log(JSON.parse( localStorage.getItem("products")));

}
document.querySelector(".btn.btn-primary").addEventListener("click", handleSubmit)



inputName.value = product.name;
inputCategory.value = product.category;
inputPrice.value = product.price;
inputReview.value = product.review;
inputImgUrl.value = product.imgUrl;
inputVideoUrl1.value = product.videoUrl;
inputVideoUrl2.value = product.videoUrl2;
description.value = product.description;
discount.value = product.discount;