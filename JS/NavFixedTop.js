// NAV
const navTop = document.querySelector(".navbar-top");
window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 100) {
        navTop.classList.add("nav-fixed");
    } else {
        navTop.classList.remove("nav-fixed")
    }
})
//icon moon
const moon = document.querySelector(".fa-moon");
window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 100) {
         moon.style.color = "#060606"
    } else {
        moon.style.color = "#0d369f"
    }
})