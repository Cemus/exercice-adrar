export class Employee {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {number} salary
   */
  constructor(name, surname, salary, power) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;

    this.power = power;
  }
  /**
   *
   * @param {number} N
   * @returns
   */
}

export class Pme {
  /**
   *
   * @param {string} name
   * @param {Employee[]} team
   * @param {number} R
   * @param {number} FF
   * @param {number} FA
   * @param {number} N
   */
  constructor(name, team) {
    this.name = name;
    this.team = team;

    this.revenue = 50;
    this.costs = 0;
    this.salaryTaxes = 1.9;
    this.money = 100;
  }

  addHuman(human) {
    this.team.push(human);
  }

  calculateRevenue() {
    let totalPower = 0;
    this.team.forEach((teamate) => {
      totalPower += teamate.power;
    });
    return totalPower;
  }

  getHumanCost() {
    let result = 0;
    for (let index = 0; index < this.team.length; index++) {
      const element = this.team[index];
      result += element.salary;
    }

    return result;
  }

  calculateOutcome() {
    this.costs = this.getHumanCost();
    this.revenue = this.calculateRevenue();
    this.money += this.revenue - this.costs;
  }
}
