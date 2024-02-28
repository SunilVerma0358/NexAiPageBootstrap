// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow_hidden");
}, 3500);
// back to top
function backtotop() {
  window.scroll(0, 0);
}
window.addEventListener("scroll", function () {
  let backtotop = document.getElementById("backtotop");
  if (window.scrollY > 250) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
});
let view = document.querySelector("#nav");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
// navbar
function navbar() {
  view.classList.toggle("show");
  span1.classList.toggle("crossLine1");
  span2.classList.toggle("crossLine2");
  span3.classList.toggle("d-none");
  document.querySelector("body").classList.toggle("overflow_hidden");
}

function navbar2() {
  view.classList.toggle("show");
  span1.classList.toggle("crossLine1");
  span2.classList.toggle("crossLine2");
  span3.classList.toggle("d-none");
  document.querySelector("body").classList.remove("overflow_hidden");
}
