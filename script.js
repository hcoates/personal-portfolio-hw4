const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

// Ordered cycle of themes
const themes = ["light", "dark", "fun"];

// Load saved theme or fallback to light
let currentTheme = localStorage.getItem("theme") || "light";
applyTheme(currentTheme);

toggleBtn.addEventListener("click", () => {
    // Find current index
    const index = themes.indexOf(currentTheme);
    // Get next index (wrap around)
    const nextIndex = (index + 1) % themes.length;
    currentTheme = themes[nextIndex];

    applyTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
});

function applyTheme(theme) {
    // Remove any theme classes
    root.classList.remove("light", "dark", "fun");

    // Add the current theme class (except light)
    if (theme !== "light") {
        root.classList.add(theme);
    }
}