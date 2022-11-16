// -- 字符串文字类型允许您指定字符串可以具有的确切值
let myFavoritePet: 'dog';
myFavoritePet = 'dog'; // myFavoritePet 值只能是 'Dog'

// 这样是错的：Type '"Rock"' is not assignable to type '"Dog"'
// myFavoritePet = "Rock";

// -- 与类型别名和联合类型一起，您可以获得类似枚举的行为。
type Species = 'cat' | 'dog' | 'bird';

interface Pet {
  species: Species;
  name: string;
  eat();
  walk();
  sleep();
}

interface Cat extends Pet {
  species: 'cat';
}

interface Dog extends Pet {
  species: 'dog';
}

interface Bird extends Pet {
  species: 'bird';
  sing();
}

function buyPet(pet: Species, name: string): Pet;
function buyPet(pet: 'cat', name: string): Cat;
function buyPet(pet: 'dog', name: string): Dog;
function buyPet(pet: 'bird', name: string): Bird;

function buyPet(pet: Species, name: string): Pet {
  const eat = () => {
    console.log(`${this.name} eats.`);
  };
  const walk = () => {
    console.log(`${this.name} walks.`);
  };
  const sleep = () => {
    console.log(`${this.name} sleeps.`);
  };
  const sing = () => {
    console.log(`${this.name} sings.`);
  };

  if (pet === 'cat') {
    return {
      species: 'cat',
      name,
      eat,
      walk,
      sleep,
    } as Cat;
  } else if (pet === 'dog') {
    return {
      species: 'dog',
      name,
      eat,
      walk,
      sleep,
    } as Dog;
  } else if (pet === 'bird') {
    return {
      species: 'bird',
      name,
      eat,
      walk,
      sleep,
      sing,
    } as Bird;
  } else {
    throw `Sorry we do not have a ${pet}. Would you like to buy a dog?`;
  }
}

function petIsCat(pet: Pet): pet is Cat {
  return pet.species === 'cat';
}

function petIsDog(pet: Pet): pet is Dog {
  return pet.species === 'dog';
}

function petIsBird(pet: Pet): pet is Bird {
  return pet.species === 'bird';
}

function playWithPet(pet: Pet) {
  console.log(`Hey ${pet.name}, lets play.`);

  if (petIsCat(pet)) {
    pet.eat();
    pet.sleep();
  } else if (petIsDog(pet)) {
    pet.eat();
    pet.walk();
    pet.sleep();
  } else if (petIsBird(pet)) {
    pet.eat();
    pet.sing();
    pet.sleep();
  } else {
    throw 'An unknown pet. Did you buy a rock?';
  }
}

let dog = buyPet(myFavoritePet, 'Rocky');

playWithPet(dog);
// Output:  Hey Rocky, lets play.
//          Rocky eats.
//          Rocky walks.
//          Rocky sleeps.
