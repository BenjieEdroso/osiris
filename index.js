import mobileNav from "./mobileNav.js";
let navButton = document.querySelector(".menu-btn");

navButton.addEventListener("click", () => {
  let app = document.querySelector(".app");
  app.classList.add("overflowHide");
  app.insertAdjacentHTML("beforeend", mobileNav);
  let navTransition = setTimeout(() => {
    app.lastElementChild.style.transform = "translate(0%)";
  }, 1);
  //close button
  app.lastElementChild.children[0].addEventListener("click", () => {
    app.classList.remove("overflowHide");
    app.lastElementChild.style.transform = "translate(100%)";
    app.lastElementChild.addEventListener("transitionend", () => {
      clearInterval(navTransition);
      app.lastElementChild.remove();
    });
  });
});
