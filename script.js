//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
}
get species() {
    return this.species;
  }

makeSound() {
    console.log(`The ${this.species} makes a sound.`);
  }
}
class Dog extends Animal {
	constructor(species){
		super(species);
	}
purr(){
	console.log("purr")
}
}
class Cat extends Animal {
	  constructor(species) {
    super(species); 
  }

  bark() {
    console.log("woof");
  }
}
const animal = new Animal("generic animal");
animal.makeSound(); 

const cat = new Cat("cat");
console.log(cat.species); 
cat.makeSound(); 
cat.purr(); 

const dog = new Dog("dog");
console.log(dog.species); /
dog.makeSound(); 
dog.bark(); 

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
