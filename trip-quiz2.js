// Saglabā to checkbox JS mainīgajā
const toggleTheme = document.getElementById("kaste");
const html = document.getElementById("html");
const bilde = document.getElementById("imghead");
const mybutton = document.getElementById("mybtn");
toggleTheme.addEventListener("change", toggleThemeHandler);

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

toggleThemeHandler();


function isCorrect(input, answid, form) {
  console.log("func isCorrect start");

  const foorm = document.getElementById(form);
  let childrenEl = foorm.children;
  Array.from(childrenEl).forEach(div => {
    div.removeAttribute("onclick")
    div.removeChild(div.firstElementChild)
  })

  if (input == "corr") {
    document.getElementById(answid).setAttribute("class", 'correctBox')
  } else {
    document.getElementById(answid).setAttribute("class", 'incorrectBox')
  }
  console.log("func isCorrect end");
}

function test() {
  console.log("a");
}
