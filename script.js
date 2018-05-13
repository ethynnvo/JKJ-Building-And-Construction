const toggleBurger = () => {
  let burger = document.getElementById("navBurger");
  let menu = document.getElementById("navMenu");
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
}; 