class Animal {
  constructor(species) {
    this._species = species; // Use an internal property to avoid conflicts.
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method specific to Cat
  purr() {
    console.log("purr");
  }
}

// Example Usage
const cat = new Cat("Siamese");
cat.makeSound(); // Output: The Siamese makes a sound
cat.purr(); // Output: purr

// Do not change the code below this line
window.Animal = Animal;
window.Cat = Cat;
