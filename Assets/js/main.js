const navLink = document.querySelectorAll(".nav__link");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".nav__menu");

// Toggle Nav
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('fa-times');
    navMenu.classList.toggle('show');
})

// Active Link
function linkAction () {
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    navMenu.classList.remove('show');
    
}

navLink.forEach(n => n.addEventListener('click', linkAction));