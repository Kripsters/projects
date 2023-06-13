// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

/**
 * Maina motīvu, kad izvēlas izvēles rūtiņu
 */
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

const response = await fetch("questions.json");
const questions = await response.json();

const main = document.getElementById("main");

// Iet caur visiem jautājumiem masīvā
questions.forEach((q) => {
  const form = document.createElement("form");
  main.appendChild(form);

  const qText = document.createElement("p");
  form.appendChild(qText);
  qText.textContent = q["question"];

  const container = document.createElement("div");
  container.className = "grid-container";
  form.appendChild(container);

  const allAnswers = q.answers;
  allAnswers.forEach((answer) => {
    const label = document.createElement("label");
    container.appendChild(label);
    label.textContent = answer;

    const input = document.createElement("input");
    input.name = q.question;
    input.type = "radio";
    label.appendChild(input);
  });
});
