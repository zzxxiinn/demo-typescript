interface Pet {
  species: string;
  age: number;
}

function checkCompatiable(petOne, petTwo): boolean {
  if (
    petOne.species === petTwo.species &&
    Math.abs(petOne.age - petTwo.age) <= 5
  ) {
    return true;
  }
  return false;
}
