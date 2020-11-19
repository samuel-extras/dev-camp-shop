const email = document.querySelector("#inputEmail");
const password = document.querySelector("#inputPassword");


const cartItemsValues = () => {
  let qty = JSON.parse(localStorage.getItem("carts"))
    .map((item) => item.quantity)
   .reduce((a, b) => a + b, 0);
   document.querySelector(".cart-items").innerHTML = qty;
};
document.addEventListener("DOMContentLoaded", () => {
    cartItemsValues()
});
const handleSubmit = (e) => {
  e.preventDefault();
  let login = {
    email: email.value,
    password: password.value 
  }
  if(login.email === "admin@gmail.com" && login.password === "admin123"){
      window.location = "vendor.html"
  }else{
      login = {
        email: email.value,
        password: password.value,
      };
      localStorage.setItem("user", JSON.stringify(login))
      window.location = "index.html"
  }
  document.querySelector("#formElem").reset();
};
document
  .querySelector(".btn.btn-primary")
  .addEventListener("click", handleSubmit);

