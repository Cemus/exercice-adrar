let hacked = false;

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

const textesTab = Array.from(paragraphs);
textesTab.forEach((p) => {
  p.style.cursor = "pointer";
  p.style.border = "thick solid black";
  p.style.paddqing = "1rem";
  p.style.borderRadius = ".5rem";
  p.style.color = "black";
  p.style.backgroundColor = "lightGray";
  p.addEventListener("click", textParagraph);
});

const button = document.createElement("button");
button.textContent = "DO NOT CLICK";
button.addEventListener("click", hackEverything);
document.body.appendChild(button);

function textParagraph() {
  return hacked ? console.log("HACKED") : console.log("Tout est good");
}

function hackEverything() {
  hacked = true;
  button.textContent = "Oh no ;_;";
  return textesTab.map((p) => {
    p.style.color = "green";
    p.textContent = "HACKED !!!1!";
  });
}
