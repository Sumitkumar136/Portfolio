    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    // Function to apply dark mode
    function applyDarkMode(isDark) {
        if (isDark) {
            document.body.classList.add("dark-mode");
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            document.body.classList.remove("dark-mode");
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    }

    // Load dark mode state from localStorage
    const darkMode = localStorage.getItem("darkMode") === "enabled";
    applyDarkMode(darkMode);

    // Toggle dark mode on click
    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        // Save user preference in localStorage
        localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

        applyDarkMode(isDark);
    });
