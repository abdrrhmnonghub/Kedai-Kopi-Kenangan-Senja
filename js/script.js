// Toggle class active hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active search-form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartbtn = document.querySelector("#shopping-cart");

shoppingCartbtn.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault;
};

document.addEventListener("click", function (e) {
  if (!shoppingCart.contains(e.target) && !shoppingCartbtn.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Menghilangkan nav di setiap klik lain

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const search = document.querySelector("#search");
document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Modal Box

itemDetailModal = document.querySelector("#item-detail-modal");
itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

//
