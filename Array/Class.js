class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeee I'm a ${this.type}`);
  }
}

const wizrd1 = new Wizard("Rohit", "Attacker");
const wizrd2 = new Wizard("Raj", "Poisner");

console.log(wizrd1);
