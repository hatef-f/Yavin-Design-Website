const navbar = document.querySelector(".navbar");
const toTopButton = document.querySelector("#to-top");

const scrollToTop = function () {
  // for safari
  document.body.scrollTop = 0;
  // for other browsers
  document.documentElement.scrollTop = 0;
};

const userScroll = function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar--scrolled");
      navbar.classList.add("navbar-sticky");
      navbar.classList.add("sticky-top");
      toTopButton.classList.add("to-top-btn--show");
    } else {
      navbar.classList.remove("navbar--scrolled");
      navbar.classList.remove("navbar-sticky");
      navbar.classList.remove("sticky-top");
      toTopButton.classList.remove("to-top-btn--show");
    }
  });
};

// Event listeners
document.addEventListener("DOMContentLoaded", userScroll);
toTopButton.addEventListener("click", scrollToTop);
