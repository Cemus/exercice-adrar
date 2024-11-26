import { pmeBaseStats } from "./stats";

export class Employee {
  constructor(name, surname, salary, power) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.power = power;

    this.xp = 0;
    this.xpMax = 100;
    this.level = 1;
  }
  update() {
    this.xp += 1;
    if (this.xp >= this.xpMax) {
      this.level += 1;
      this.xp = this.xp - this.xpMax;
      this.xpMax += 50;
      this.power += Math.floor(Math.random() * 3 - 1 + 1);
    }
  }
}

export class Pme {
  constructor(name, team) {
    this.name = name;
    this.team = team;

    this.revenue = pmeBaseStats.revenue;
    this.costs = pmeBaseStats.costs;
    this.money = pmeBaseStats.money;
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
    this.revenue = this.calculateRevenue();
    this.costs += this.getHumanCost();
    this.money += this.revenue - this.costs;
  }

  updateEmployees() {
    for (let index = 0; index < this.team.length; index++) {
      const employee = this.team[index];
      employee.update();
    }
  }
}
