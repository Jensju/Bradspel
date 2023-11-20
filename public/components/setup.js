const section1 = document.createElement("section");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const div10 = document.createElement("div");
const div11 = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const button = document.createElement("button");

// h1.innerText = "Luffarens schackparti!";
h1.innerText = "Luffarens schackparti!"
button.innerText = "Starta om spelet!"
div1.classList.add("tile", "right-border", "bottom-border");
div2.classList.add("tile", "right-border", "bottom-border");
div3.classList.add("tile", "right-border", "bottom-border");
div4.classList.add("tile", "right-border", "bottom-border");
div5.classList.add("tile", "right-border", "bottom-border");
div6.classList.add("tile", "right-border", "bottom-border");
div7.classList.add("tile", "right-border", "bottom-border");
div8.classList.add("tile", "right-border", "bottom-border");
div9.classList.add("tile", "right-border", "bottom-border");

div10.classList.add("strike");
div11.classList.add("hidden");

section1.id = "board"
div1.id = 1
div2.id = 2
div3.id = 3
div4.id = 4
div5.id = 5
div6.id = 6
div7.id = 7
div8.id = 8
div9.id = 9

div10.id = "strike"
div11.id = "game-over-area"
h2.id = "game-over-text"
button.id = "play-again"

section1.appendChild(div1);
section1.appendChild(div2);
section1.appendChild(div3);
section1.appendChild(div4);
section1.appendChild(div5);
section1.appendChild(div6);
section1.appendChild(div7);
section1.appendChild(div8);
section1.appendChild(div9);

section1.appendChild(div10);

document.body.appendChild(h1);
document.body.appendChild(section1);

document.body.appendChild(div11);
div11.appendChild(h2);
div11.appendChild(button);







// const abc = document.createElement("xyz");

// abc.innerText = "Text...";
// abc.classList.add("Class-name");

// dockument.body.appendChild(abc); 
// abc.appendChild(def);

