// Saglabā to checkbox JS mainīgajā
const toggleTheme = document.getElementById("kaste");
const html = document.getElementById("html");
toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  console.log(toggleTheme.checked);
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const theme = localStorage.getItem("theme");

if (theme == "light" || !theme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  document.getElementById("kaste").checked = true;
}

toggleThemeHandler();
