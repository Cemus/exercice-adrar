import { Employee, Pme } from "./scripts/classes";
import { nameList, surnameList } from "./scripts/nameList";

//Dom
const modal = document.querySelector("dialog");
const resetButton = document.getElementById("reset");
const employees = document.getElementById("employees");
const status = document.getElementById("status");
const day = document.getElementById("day");
const speedUpButton = document.getElementById("spdUp");
const speedDownButton = document.getElementById("spdDown");
const speedIndicator = document.getElementById("speed");
const costRecruitSpan = document.getElementById("costRecruit");

let uniqueId = 0;
let gameSpeed = 750;
let timer = 0;
let costRecruit = 100;

function getSpeed() {
  switch (gameSpeed) {
    case 250:
      speedIndicator.textContent = "Fast";
      break;
    case 500:
      speedIndicator.textContent = "Medium";
      break;
    case 750:
      speedIndicator.textContent = "Slow";
      break;
    case 1000:
      speedIndicator.textContent = "Slower";
      break;
  }
  console.log(gameSpeed);
}

function changeInterval() {
  clearInterval(gameInterval);

  gameInterval = setInterval(() => {
    update();
  }, gameSpeed);
}

speedDownButton.addEventListener("click", () => {
  if (gameSpeed !== 1000) {
    gameSpeed += 250;
    changeInterval();
    getSpeed();
  }
});

speedUpButton.addEventListener("click", () => {
  if (gameSpeed !== 250) {
    gameSpeed -= 250;
    changeInterval();
    getSpeed();
  }
});

function checkGameover() {
  if (pme.money < -1000) {
    clearInterval(gameInterval);
    console.log(modal);
    modal.showModal();
  }
}

resetButton.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  pme = new Pme("Ma pme");
}

function update() {
  timer++;
  day.textContent = timer;
  costRecruitSpan.textContent = `(coûte ${costRecruit})`;
  checkGameover();
  pme.calculateOutcome();
  pme.updateEmployees();
  getHuman();
  getStatus();
}

function getHuman() {
  pme.team.forEach((human) => {
    const li = document.createElement("li");
    li.dataset.id = human.id;
    const name = document.createElement("h3");
    name.textContent = `${human.name}  ${human.surname}`;
    const info = document.createElement("p");
    info.textContent = `coût annuel : ${human.calculateSalary()}, efficacité : ${
      human.power
    }${
      human.powerMultiplier > 0.5
        ? human.powerMultiplier !== 1
          ? `(+${human.getPowerPercentage()}%)`
          : ""
        : `(${human.getPowerPercentage()}%)`
    } morale : ${human.morale}`;

    const stats = document.createElement("p");
    stats.textContent = `Level : ${human.level} | XP : ${human.xp}/${human.xpMax}`;

    const fireButton = document.createElement("button");
    fireButton.classList.add("fire-button");
    fireButton.textContent = `Fire`;

    const vacationButton = document.createElement("button");
    vacationButton.classList.add("vacation-button");
    vacationButton.textContent = !human.isFree ? `To vacation` : `Come back`;

    li.append(name);
    li.append(info);
    li.append(stats);
    li.append(vacationButton);
    li.append(fireButton);

    employees.append(li);
  });
}

employees.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.closest("li");
    const employeeId = li.dataset.id;

    if (button.classList.contains("fire-button")) {
      console.log("^^");
      li.remove();
      pme.fireEmployee(parseInt(employeeId));
    } else if (button.classList.contains("vacation-button")) {
      console.log("^^");
      pme.sendToVacation(parseInt(employeeId));
    }
  }
});

function getStatus() {
  const revenue = `<p>Revenue : ${pme.revenue}</p>`;
  const costs = `<p>Coût : ${pme.costs}</p>`;
  const money =
    pme.revenue < pme.costs
      ? `<p class='danger'>Trésorerie : ${pme.money}</p>`
      : `<p class='good'>Trésorerie : ${pme.money}</p>`;

  status.innerHTML = `${revenue}<br/>${costs}<br/>${money}`;
}

function getRandomName() {
  const randomPrenom = Math.floor(Math.random() * nameList.length);
  const randomNom = Math.floor(Math.random() * surnameList.length);
  console.log(randomPrenom);
  return { name: nameList[randomPrenom], surname: surnameList[randomNom] };
}

const addHumanButton = document.getElementById("addHuman");
addHumanButton.addEventListener("click", () => {
  if (costRecruit <= pme.money) {
    pme.money -= costRecruit;
    costRecruit = Math.floor(costRecruit * 1.5);

    const randomNames = getRandomName();
    pme.addHuman(
      new Employee(createId(), randomNames.name, randomNames.surname)
    );
  }
});

function createId() {
  uniqueId++;
  return uniqueId;
}

let pme = new Pme("Ma pme", [new Employee(0, "You", "", 0, 50)]);

let gameInterval = setInterval(() => {
  update();
}, gameSpeed);
update();
