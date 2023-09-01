const navbar = document.querySelector(".navbar");

const userScroll = function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar--scrolled");
      navbar.classList.add("navbar-sticky");
      navbar.classList.add("sticky-top");
    } else {
      navbar.classList.remove("navbar--scrolled");
      navbar.classList.remove("navbar-sticky");
      navbar.classList.remove("sticky-top");
    }
  });
};
document.addEventListener("DOMContentLoaded", userScroll);
