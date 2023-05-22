const toggleTheme = document.getElementById("kaste");
const html = document.getElementById("html");
const bilde = document.getElementById("imghead");
const mybutton = document.getElementById("mybtn");
let i = 0;
toggleTheme.addEventListener("change", toggleThemeHandler);

async function logJSONData() {
  const response = await fetch("/questions.json");
  const jsonData = await response.json();
  console.log(jsonData);
  jsonData.forEach((quest) => {
      let heed = "head" + (i + 1)
      let qq = quest.question;
    document.getElementById(heed) = quest.question;
    console.log(quest.question);
    i++;
  });
  console.log(i);
}
logJSONData();

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
