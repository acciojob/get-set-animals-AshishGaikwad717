class Animal {
  constructor(species) {
    this._species = species; // Use an internal property for better getter/setter management.
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method specific to Dog
  bark() {
    console.log("woof");
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
const animal = new Animal("generic animal");
animal.makeSound(); // Output: The generic animal makes a sound.

const cat = new Cat("cat");
console.log(cat.species); // Output: cat
cat.makeSound(); // Output: The cat makes a sound.
cat.purr(); // Output: purr

const dog = new Dog("dog");
console.log(dog.species); // Output: dog
dog.makeSound(); // Output: The dog makes a sound.
dog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
