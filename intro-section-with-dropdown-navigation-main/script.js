const featureDropdown = document.querySelector(".feature__parent");
featureDropdown.addEventListener("mouseover", () => {
  document.querySelector(".feature__dropdown").classList.remove("hide");
});

document
  .querySelector(".feature__dropdown")
  .addEventListener("mouseleave", () => {
    document.querySelector(".feature__dropdown").classList.add("hide");
  });

const companyDropdown = document.querySelector(".company__parent");

companyDropdown.addEventListener("mouseover", () => {
  document.querySelector(".company__dropdown").classList.remove("hide");
});

document
  .querySelector(".company__dropdown")
  .addEventListener("mouseleave", () => {
    document.querySelector(".company__dropdown").classList.add("hide");
  });
