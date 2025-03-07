document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(0, 0, 0, 0.8)";
        } else {
            nav.style.background = "rgba(0, 0, 0, 0.2)";
        }
    });
});
