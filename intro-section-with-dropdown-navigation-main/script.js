const navHumbuggerOpen = document.querySelector(".nav__humbugger");
const navHumbuggerClose = document.querySelector(".nav__close__humbugger");
const mobileNav = document.querySelector(".nav__mobile");
const featureButton = document.querySelector(".feature__parent");
const companyButton = document.querySelector(".company__parent");
const mobileFeatureButton = document.querySelector(".mobile__feature__parent");
const mobileCompanyButton = document.querySelector(".mobile__company__parent");

featureButton.addEventListener("click", () => {
  if (document.querySelector(".feature__dropdown").classList.contains("hide")) {
    document.querySelector(".company__dropdown").classList.add("hide");
    document.querySelector(".feature__dropdown").classList.remove("hide");
  } else {
    document.querySelector(".feature__dropdown").classList.add("hide");
  }
});
mobileFeatureButton.addEventListener("click", () => {
  if (
    document
      .querySelector(".mobile__feature__dropdown")
      .classList.contains("hide")
  ) {
    document.querySelector(".mobile__company__dropdown").classList.add("hide");
    document
      .querySelector(".mobile__feature__dropdown")
      .classList.remove("hide");
  } else {
    document.querySelector(".mobile__feature__dropdown").classList.add("hide");
  }
});

companyButton.addEventListener("click", () => {
  if (document.querySelector(".company__dropdown").classList.contains("hide")) {
    document.querySelector(".company__dropdown").classList.remove("hide");
    document.querySelector(".feature__dropdown").classList.add("hide");
  } else {
    document.querySelector(".company__dropdown").classList.add("hide");
  }
});

mobileCompanyButton.addEventListener("click", () => {
  if (
    document
      .querySelector(".mobile__company__dropdown")
      .classList.contains("hide")
  ) {
    document
      .querySelector(".mobile__company__dropdown")
      .classList.remove("hide");
    document.querySelector(".mobile__feature__dropdown").classList.add("hide");
  } else {
    document.querySelector(".mobile__company__dropdown").classList.add("hide");
  }
});
navHumbuggerOpen.addEventListener("click", () => {
  mobileNav.classList.remove("hide");
  document.body.style.backgroundColor = "#00000083";
});

navHumbuggerClose.addEventListener("click", () => {
  mobileNav.classList.add("hide");
  document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
});
