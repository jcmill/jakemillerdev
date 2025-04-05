var bodyContainer = document.querySelector("body");
var btnHamburger = document.querySelector(".js-hamburger");
var menu = document.querySelector(".js-menu");
var menuContent = document.querySelector(".js-menu__content");
var burgerLines = document.querySelectorAll(".js-burger__container");
var burgerRise = document.querySelector(".js-burger");
document.addEventListener("click", function (el) {
  if (!menuContent.contains(el.target) && !btnHamburger.contains(el.target)) {
    btnHamburger.removeAttribute("active", "");
    menuDisplay("remove");
  } else if (btnHamburger.contains(el.target) && !btnHamburger.hasAttribute("active")) {
    btnHamburger.setAttribute("active", "");
    menuDisplay("add");
  } else if (btnHamburger.contains(el.target) && btnHamburger.hasAttribute("active")) {
    btnHamburger.removeAttribute("active", "");
    menuDisplay("remove");
  }
});
function menuDisplay(action) {
  if (action === "add") {
    menu.classList.remove("hide");
    setTimeout(function () {
      bodyContainer.classList.add("o-noscroll");
      btnHamburger.classList.add("nav-active");
      menu.classList.add("c-menu--open");
    }, 0);
  } else if (action === "remove") {
    bodyContainer.classList.remove("o-noscroll");
    btnHamburger.classList.remove("nav-active");
    menu.classList.remove("c-menu--open");
    setTimeout(function () {
      menu.classList.add("hide");
      menuContent.classList.add("hide");
    }, 500);
  }
}

// to close menu window when esc button pressed and resume scrolling when menu close
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && btnHamburger.hasAttribute("active")) {
    // Close the menu when Escape key is pressed
    btnHamburger.removeAttribute("active", "");
    menuDisplay("remove");
  }
});