const btnNav = document.querySelector(".btn-mobile-nav");
const asideHeadingEl = document.querySelector(".aside--heading");
const asideContentEl = document.querySelector(".aside-content");

console.log(btnNav);

btnNav.addEventListener("click", function () {
  asideHeadingEl.classList.toggle("nav-open");
  asideContentEl.classList.toggle("nav-open");
});

console.log(asideHeadingEl);
console.log(asideContentEl);
