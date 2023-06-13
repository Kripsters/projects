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
    
    main.appendChild(form);
    
    const qText = document.createElement("p");
    form.appendChild(qText);
    qText.textContent = q["question"];

    const container = document.createElement("div");
    container.classList.add = "grid-container";
    form.appendChild(container);

   
    const allAnswers = q.answers;
    allAnswers.forEach((answer, index) => {
        const label = document.createElement("label");
        container.appendChild(label);
        label.textContent = answer;
        
        const input = document.createElement("input");
        input.name = q.question;
        input.type = "radio";
        label.appendChild(input);
        input.addEventListener("click",() => checkHandler(q["correctAnswer"], nodeListAllAnswers));
        input.value = index;
    });
    const nodeListAllAnswers = document.getElementsByName(q["question"]);
    
});
function checkHandler(correctAnswer, visasAtbildes) {
  visasAtbildes.forEach((atbilde) => {
    console.log(atbilde.value + "  " + correctAnswer)
    if (atbilde.checked) {
      if (atbilde.value == correctAnswer) {
        atbilde.parentNode.style.backgroundColor = "green";
      } else {
        atbilde.parentNode.style.backgroundColor = "red";
      }
    } else {
      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
    }
  });
}



//Ko darīt ar questions?

