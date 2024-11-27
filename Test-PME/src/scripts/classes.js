import { pmeBaseStats } from "./stats";

export class Employee {
  constructor(id, name, surname, power) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.power = power;

    this.xp = 0;
    this.xpMax = 100;
    this.level = 1;
    this.morale = Math.floor(Math.random() * 100 + 50 - 50);
    this.isFree = false;
    this.isWorking = true;
    this.powerMultiplier = 0;
  }
  update() {
    this.checkMorale();
    if (!this.isFree) {
      this.xp += 1;
      if (this.xp >= this.xpMax) {
        this.leveUp();
      }
    }
  }

  calculateSalary() {
    return this.level + Math.floor(this.power / 4);
  }

  checkMorale() {
    if (this.isFree) {
      if (this.morale < 100) this.morale++;
    } else {
      if (this.morale !== 0) {
        this.morale--;
      }
    }
  }

  leveUp() {
    this.level += 1;
    this.xp = this.xp - this.xpMax;
    this.xpMax += 50;
    this.power += Math.floor(Math.random() * 3 - 1 + 1);
  }

  getPowerPercentage() {
    return this.powerMultiplier === 1
      ? `${this.powerMultiplier}`
      : this.powerMultiplier * 100;
  }

  calculatePower() {
    if (this.morale >= 75) {
      this.powerMultiplier = 1.5;
    } else {
      if (this.morale >= 50) {
        this.powerMultiplier = 1;
      } else {
        if (this.morale < 50 && this.morale > 25) {
          this.powerMultiplier = 0.5;
        } else {
          this.powerMultiplier = 0.25;
        }
      }
    }
    return Math.floor(this.power * this.powerMultiplier);
  }

  toVacation() {
    this.isFree = !this.isFree;
  }
}

export class Pme {
  constructor(name) {
    this.name = name;

    this.team = [];
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
      if (!teamate.isFree) {
        totalPower += teamate.calculatePower();
      }
    });
    return totalPower;
  }

  getHumanCost() {
    let result = 0;
    for (let index = 0; index < this.team.length; index++) {
      const element = this.team[index];
      console.log(element.calculateSalary());
      result += element.calculateSalary();
    }

    return result;
  }

  calculateOutcome() {
    this.revenue = this.calculateRevenue();
    this.costs = this.getHumanCost();
    this.money += this.revenue - this.costs;
  }

  updateEmployees() {
    for (let index = 0; index < this.team.length; index++) {
      const employee = this.team[index];
      employee.update();
    }
  }

  fireEmployee(employeeId) {
    for (let index = 0; index < this.team.length; index++) {
      const employee = this.team[index];
      if (employee.id === employeeId) {
        this.team.splice(index, 1);
      }
    }
  }
  sendToVacation(employeeId) {
    for (let index = 0; index < this.team.length; index++) {
      const employee = this.team[index];
      if (employee.id === employeeId) {
        employee.toVacation();
      }
    }
  }
}
