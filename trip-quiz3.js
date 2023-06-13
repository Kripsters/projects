const toggleTheme = document.getElementById("kaste");
console.log("111");
const html = document.getElementById("html");
const bilde = document.getElementById("imghead");
const mybutton = document.getElementById("mybtn");
let formCount = 0;
let questCount = 0;
toggleTheme.addEventListener("change", toggleThemeHandler);



const response = await fetch("questions.json");
const questions = await response.json();
console.log(questions[0]);

const main = document.getElementById("main");

console.log(questions);

const htmlBreak = document.createElement("div");
htmlBreak.setAttribute("class", "break");
main.appendChild(htmlBreak);

const visasAtbildes = document.getElementsByClassName("answerBox");
console.log(visasAtbildes);

questions.forEach((q) => {

    const form = document.createElement("form");
    console.log(form);
    main.appendChild(form);
    
    const qText = document.createElement("p");
    form.appendChild(qText);
    
    qText.textContent = q["question"];

    const centerBox = document.createElement("div");
    form.appendChild(centerBox);
    centerBox.className = "centerBox";

    const allAnswers = q.answers;
    console.log(allAnswers);
    
    allAnswers.forEach((r, index) => {
        const label = document.createElement("label");
        label.className = "answerBox";
        
        let input = document.createElement("input");
        input.type = "radio";
        input.name = formCount;
        input.value = index;
        input.class = "answ";
        input.id = questCount
        input.addEventListener("click", () => checkHandler(input.name, input.value, input.id));

        label.textContent = r;
        label.appendChild(input);
        centerBox.appendChild(label);
        questCount++;
    });
    formCount++;
});



function checkHandler(quest, answ, qnum) {
  const answer = document.getElementById(qnum);

  if (answer.checked == true) {
  if (answ == questions[quest].correctAnswer) {
      answer.parentNode.style.backgroundColor = "green";
  } else {
      answer.parentNode.style.backgroundColor = "red";
  }
} else {
  answer.parentNode.style.backgroundColor = "var(--krasa)";
}
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