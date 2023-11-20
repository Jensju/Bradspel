const section = document.createElement("section");
const form = document.createElement("form");
const input = document.createElement("input");
const input2 = document.createElement("input");
const button = document.createElement("button");
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
const p1 = document.createElement("p");
const p2 = document.createElement("p");

h3.innerText = "Spela";
h1.innerText = "Luffarens schackparti";
p1.innerText = "Utmana din kompis på luffarschack!";
p2.innerText = "Skriv in ditt och din motspelares namn i X-, respektive O-fältet här nedan och börja spela!";
button.innerText = "Starta spelet!";

input.type = "text";
input.id = "playerX";
input.placeholder = "Spelare X:s namn";
input.name = "playerX";
input.required = true;

input2.type = "text";
input2.id = "playerO";
input2.placeholder = "Spelare O:s namn";
input2.name = "playerO";
input2.required = true;

p1.id = "first";
p2.id = "first";
section.id = "newPlayersArea";
form.action = "";
form.id = "addPlayer";

document.body.appendChild(h3);
document.body.appendChild(h1);
document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(section);
section.appendChild(form);
form.appendChild(input);
form.appendChild(input2);
form.appendChild(button);


