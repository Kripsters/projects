console.log("111");
const html = document.getElementById("html");
let formCount = 0;
let questCount = 0;



const response = await fetch("animals.json");
const animals = await response.json();



const main = document.getElementById("main");



animals.forEach(q => {

    const answers = q.answers;

    const article = document.createElement("article");
    main.appendChild(article);

    const img = document.createElement("img");
    img.src = q.image;
    img.alt = q.animal;
    article.appendChild(img);

    const div = document.createElement("div");
    div.className= "info";
    article.appendChild(div);

    const h2 = document.createElement("h2");
    h2.textContent = q.animal;
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = q.description;
    div.appendChild(p);

    const ul = document.createElement("ul");
    div.appendChild(ul);

    let i=0;
    answers.forEach((r) => {
        
        const li = document.createElement("li");
        li.textContent=q.answers[i];
        ul.appendChild(li);
        i++;
    }
    )
});