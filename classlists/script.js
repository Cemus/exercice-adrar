const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.textContent = "D.O.M. EVENTS";

const container = document.createElement("div");
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");

a1.textContent = "Ajouter classe";
a2.textContent = "Supprimer classe";
a3.textContent = "Toggle classe";
a4.textContent = "Toggle glass";

header.appendChild(h1);
container.appendChild(a1);
container.appendChild(a2);
container.appendChild(a3);
container.appendChild(a4);

header.appendChild(container);

document.body.appendChild(header);

a1.addEventListener("click", () => {
  h1.classList.add("toggled");
  isToggled = true;
});

a2.addEventListener("click", () => {
  h1.classList.remove("toggled");
  isToggled = false;
});

a3.addEventListener("click", () => {
  h1.classList.toggle("toggled");
});

a4.addEventListener("click", () => {
  header.classList.toggle("glass");
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.classList.toggle("glass");
  });
});
