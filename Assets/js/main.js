const navLink = document.querySelectorAll(".nav__link");
const description = document.getElementsByClassName("proj-description");

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav__menu");

// Toggle Nav
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("fa-times");
  navMenu.classList.toggle("show");
});

// Active Link
function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  navMenu.classList.remove("show");
  navToggle.classList.remove("fa-times");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Open and close project description when clicked
for (let i = 0; i < description.length; i++) {
  description[i].addEventListener("click", () => {
    let panel = description[i].nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.style.zIndex = "1000";
    }
  });
}
