// Saglabā to checkbox JS mainīgajā
const toggleTheme = document.getElementById("kaste");
const html = document.getElementById("html");
const bilde = document.getElementById("imghead");
const mybutton = document.getElementById("mybtn");
toggleTheme.addEventListener("change", toggleThemeHandler);
mybutton.addEventListener("click", checkAmountCorrect);

function toggleThemeHandler() {
  console.log(toggleTheme.checked);
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    bilde.setAttribute("src", "ToggleOn.svg");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
    bilde.setAttribute("src", "ToggleOff.svg");
  }
}

const theme = localStorage.getItem("theme");

if (theme == "light" || !theme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  document.getElementById("kaste").checked = true;
}

function checkAmountCorrect() {
  console.log("func checkAmountCorrect start");
  var result = 0;
  if (document.getElementById("answ1").checked == true) {
    result = result + 1;
  }
  if (document.getElementById("answ3").checked == true) {
    result = result + 1;
  }
  if (document.getElementById("answ4").checked == true) {
    result = result + 1;
  }
  if (document.getElementById("answ2").checked == true) {
    result = "Roma 💀";
  }
  if (document.getElementById("answ2").checked != true) {
    document.getElementById("isCorrect").innerHTML =
      "Pareizi izvelejies " + result + " no 3";
  } else {
    document.getElementById("isCorrect").innerHTML = result;
  }
  console.log("func checkAmountCorrect end");
}

toggleThemeHandler();
