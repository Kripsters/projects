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

const visasPareizasAtb = ["Indonēzija", "Austrālija", "Liepāja"];
for (let i = 1; i <= 3; i++) {
  const visasAtbildes = document.getElementsByName(i);

  visasAtbildes.forEach((atbilde) => {
    atbilde.addEventListener("click", () =>
      checkHandler(visasPareizasAtb[i - 1], visasAtbildes)
    );
  });
}

/**
 * Iekrāso atbildes vienā jautājumā
 * @param {string} correctAnswer - pareizā atbilde ar vārdiem jāsakrīt ar value.
 * @param {*} allAnswers - 4 input elementi, atbildes uz jautājumu.
 */
function checkHandler(correctAnswer, allAnswers) {
  allAnswers.forEach((atbilde) => {
    if (atbilde.checked == true) {
      if (atbilde.value == correctAnswer) {
        atbilde.parentNode.style.backgroundColor = "green";
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
      }
    } //else {
    //  atbilde.parentNode.style.backgroundColor = "var(--krasa)";
    //}
  });
}
