const menuButton = document.querySelector(".menu-mobile-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCloseButton = document.querySelector(".menu-mobile-close");

menuButton.addEventListener("click", () => {
  mobileMenu.style.right = "0";
  menuButton.style.display = "none";
  menuCloseButton.style.display = "block";
});

menuCloseButton.addEventListener("click", () => {
  mobileMenu.style.right = "100%";
  menuButton.style.display = "block";
  menuCloseButton.style.display = "none";
});
