// Saglabā to checkbox JS mainīgajā
const toggleTheme = document.getElementById("kaste");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  console.log(toggleTheme.checked);
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
  } else {
    html.dataset.theme = "light";
  }
}
