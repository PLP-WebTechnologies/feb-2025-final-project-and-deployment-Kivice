// Toggle Theme
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}

document.getElementById("theme-toggle").addEventListener("click", function() {
    let currentTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    setTheme(currentTheme);
});

window.onload = function() {
    setTheme(localStorage.getItem("theme") || "light");
};

// Live Search
document.getElementById("search-bar").addEventListener("keyup", function () {
    let query = this.value.toLowerCase();
    let items = document.querySelectorAll(".product");

    items.forEach(item => {
        let name = item.querySelector("h3").innerText.toLowerCase();
        item.style.display = name.includes(query) ? "block" : "none";
    });
});
