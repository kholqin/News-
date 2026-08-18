"use strict";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    const active = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        String(active)
    );
});

document.querySelectorAll("#mainNav a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
