const response = await fetch("questions.json");
const questions = await response.json();
console.log(questions[0].answers[2]);

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

if (localStorageTheme === "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}


const main = document.getElementById("main");

questions.forEach((q) => {
    const form = document.createElement("form");
    console.log(form);
    main.appendChild(form);
    
    const qText = document.createElement("p");
    form.appendChild(qText);
    qText.textContent = q["question"];

    const container = document.createElement("div");
    container.classList.add = "grid-container";
    form.appendChild(container);

   
    const allAnswers = q.answers;
    allAnswers.forEach((answer) => {
        const label = document.createElement("label");
        label.className = "answerBox";
        container.appendChild(label);
        

        let input = document.getElementById("input");
        input.type = "radio";
        label.appendChild(input);
    });
});