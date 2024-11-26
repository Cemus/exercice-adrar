import { Employee, Pme } from "./classes";
import { nameList, surnameList } from "./nameList";

const months = document.getElementById("months");
let timer = 0;

setInterval(() => {
  timer++;
  months.textContent = timer;
  update();
}, 1500);

const pme = new Pme("Ma pme", [new Employee("You", "", 0, 100)]);

const employees = document.getElementById("employees");
const status = document.getElementById("status");

function update() {
  pme.calculateOutcome();
  getHuman();
  getStatus();
}

function getHuman() {
  employees.textContent = "";
  pme.team.forEach((human) => {
    const li = document.createElement("li");
    li.textContent = `${human.name}  ${human.surname} (coût annuel : ${human.salary}, efficacité : ${human.power}`;
    employees.append(li);
  });
}

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
  const randomNames = getRandomName();
  pme.addHuman(
    new Employee(
      randomNames.name,
      randomNames.surname,
      45,
      Math.floor(Math.random() * 10)
    )
  );
  update();
});

update();
