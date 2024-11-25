class Imc {
  /**
   *
   * @param {string} personName
   * @param {number} mass
   * @param {number} height
   */
  constructor(personName, mass, height) {
    this.personName = personName;
    this.mass = mass;
    this.height = height;
    this.imc = null;
  }
  calculateImc() {
    return (this.mass / this.height ** 2).toFixed(2);
  }
  /**
   *
   * @param {function(number):string} imc
   * @returns
   */
  getStatus(imc) {
    let result = "";
    if (imc < 18.5) {
      result = "Maigreur";
    }
    if (imc >= 18.5 && imc <= 25) {
      result = "Normal";
    }
    if (imc > 25 && imc <= 30) {
      result = "Surpoids";
    }
    if (imc > 30 && imc <= 35) {
      result = "Obésité modérée";
    }
    if (imc > 35 && imc <= 40) {
      result = "Obésité sévère";
    }
    if (imc > 40) {
      result = "Obésité morbide";
    }
    return result;
  }
  display() {
    this.imc = this.calculateImc();
    const result = `${this.personName} (${this.mass} kg, ${this.height} M) a un IMC de : ${this.imc}.`;
    console.log(result);
    return result;
  }
}

const list = [
  new Imc("Jean Dupuis", 135, 1.5),
  new Imc("Jeanne Dupuis", 45, 1.68),
  new Imc("Francis LaPlace", 300, 2),
  new Imc("Elena Planche", 90, 1.75),
  new Imc("Brice du Gers", 190, 1),
  new Imc("Eugénie Huan", 2, 1.2),
  new Imc("Goku San", 77, 1.9),
  new Imc("Harry Tard", 169, 2.1),
  new Imc("Harold Valise", 135, 1.5),
];

/* for (let index = 0; index < list.length; index++) {
  const element = list[index];
  element.display();
} */
const personName = document.getElementById("name");
const mass = document.getElementById("mass");
const height = document.getElementById("height");
const button = document.getElementById("button");
const imc = document.getElementById("imc");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  if (mass.value && personName.value && height.value) {
    const user = new Imc(personName.value, mass.value, height.value);
    imc.textContent = user.display();
    result.textContent = user.getStatus(user.imc);
  } else {
    imc.textContent = "Not enough data";
  }
});
