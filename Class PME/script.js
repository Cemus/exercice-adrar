class Employee {
  constructor(name, surname, age, salary) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.salary = salary;
  }
  getMonthlySalary(N) {
    const result = this.salary * N;
    return result * 1.9;
  }
}

class Pme {
  constructor(name, team, R, FF, FA, N) {
    this.name = name;
    this.team = team;
    this.R = R;
    this.FF = FF;
    this.FA = FA;
    this.N = N;
  }
  getHumanCost() {
    let result = 0;
    for (let index = 0; index < this.team.length; index++) {
      const element = this.team[index];
      result += element.getMonthlySalary(this.N);
    }
    return result;
  }
  getEconomicBalance() {
    return this.R - this.getHumanCost() - this.FF - this.FA;
  }
}

const myPme = new Pme(
  "Ma Petite Entreprise - ",
  [
    new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),
  ],
  300000,
  20000,
  50000,
  12
);

console.log("BILAN :", myPme.getEconomicBalance());
