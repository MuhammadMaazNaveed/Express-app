// const section1_title = document.querySelector(".section1_title");

// const observer = new IntersectionObserver(
//   (entries) => {
//     const ent = entries[0];
//     ent.isIntersecting === false
//       ? document.body.classList.add("sticky")
//       : document.body.classList.remove("sticky");
//   },
//   {
//     root: null,
//     rootMargin: "-80px",
//     threshold: 0,
//   }
// );
// observer.observe(section1_title);

const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-items");
const nav_button = document.querySelector(".button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
  nav_button.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
  })
);
