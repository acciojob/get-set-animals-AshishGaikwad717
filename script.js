class Animal {
  constructor(species) {
    this.species = species; 
  }

  // Getter for species
  get species() {
    return this.species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species); 
  }
	
  purr() {
    console.log("purr");
  }
}
class Dog extends Animal{
	constructor(species){
		super(species);
	}
	bark(){
		console.log("woof")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Cat = Cat;
window.Dog= Dog;