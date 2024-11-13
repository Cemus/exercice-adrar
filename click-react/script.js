let activated = false;

const h1 = document.createElement("h1");
h1.textContent = "D.O.M. EVENTS";
h1.style.cursor = "pointer";
h1.style.userSelect = "none";
document.body.appendChild(h1);

function changeH1() {
  activated
    ? (h1.textContent = "D.O.M. EVENTS")
    : (h1.textContent = "--- 🍺 ---");
  activated = !activated;
}

h1.addEventListener("click", changeH1);
