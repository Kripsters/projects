// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}

const answ = document.getElementsByName("j1");
console.log(answ);

answ.forEach((atbilde) => {
  atbilde.addEventListener("click", checkHandler);
});

function checkHandler() {
  answ.forEach((atbilde) => {
    if (atbilde.checked == true) {
      if (atbilde.value == "Indonēzija") {
        atbilde.parentNode.style.backgroundColor = "green";
        console.log("a1");
        console.log(atbilde.parentNode);
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
        console.log("a2");
      }
    } else {
      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
    }
  });
}
