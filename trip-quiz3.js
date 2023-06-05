const toggleTheme = document.getElementById("kaste");
const html = document.getElementById("html");
const bilde = document.getElementById("imghead");
const mybutton = document.getElementById("mybtn");
let qSkaits = 1;
toggleTheme.addEventListener("change", toggleThemeHandler);


const response = await fetch("questions.json");
const questions = await response.json();
console.log(questions[0]);

const main = document.getElementById("main");

console.log(questions);

const htmlBreak = document.createElement("div");
htmlBreak.setAttribute("class", "break");
main.appendChild(htmlBreak);

questions.forEach((q) => {

    const form = document.createElement("form");
    console.log(form);
    main.appendChild(form);
    
    const qText = document.createElement("p");
    form.appendChild(qText);
    
    qText.textContent = q["question"];

    const centerBox = document.createElement("div");
    form.appendChild(centerBox);
    centerBox.setAttribute("class", "centerBox");

    const allAnswers = q.answers;
    console.log(allAnswers);
    
    allAnswers.forEach((r) => {
        const label = document.createElement("label");
        label.setAttribute("class", "answerbox");
        
        let input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "example");
        input.setAttribute("value", r);

        label.textContent = r;
        label.appendChild(input);
        centerBox.appendChild(label);
    });
});


for (let i = 1; i <= 3; i++) {
  const visasAtbildes = document.getElementsByName(i);

  visasAtbildes.forEach((atbilde) => {
    atbilde.addEventListener("click", () =>
      checkHandler(visasPareizasAtb[i - 1], visasAtbildes)
    );
  });
}


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
