document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const sidebarMenu = document.getElementById("sidebarMenu");
    // const navLinks = document.querySelectorAll(".nav-link");

    // Open Menu
    menuToggle.addEventListener("click", function () {
        sidebarMenu.classList.add("active");
    });

    // Close Menu
    closeMenu.addEventListener("click", function () {
        sidebarMenu.classList.remove("active");
    });

    // Click Outside to Close
    document.addEventListener("click", function (event) {
        if (!sidebarMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebarMenu.classList.remove("active");
        }
    });

    // Highlight the Active Page
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});