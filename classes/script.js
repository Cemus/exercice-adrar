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
    if (imc < 18.5) {
      return "Maigreur";
    }
    if (imc >= 18.5 && imc <= 25) {
      return "Normal";
    }
    if (imc > 25 && imc <= 30) {
      return "Surpoids";
    }
    if (imc > 30 && imc <= 35) {
      return "Obésité modérée";
    }
    if (imc > 35 && imc <= 40) {
      return "Obésité sévère";
    }
    if (imc > 40) {
      return "Obésité morbide";
    }
  }
  display() {
    const imc = this.calculateImc();
    console.log(
      `${this.personName} (${this.mass} kg, ${
        this.height
      } M) a un IMC de : ${imc}\nStatut : ${this.getStatus(imc)}`
    );
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

for (let index = 0; index < list.length; index++) {
  const element = list[index];
  element.display();
}
