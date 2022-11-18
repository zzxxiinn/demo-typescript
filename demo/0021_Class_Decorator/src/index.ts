function addMetadata(target: any) {
  // Add some metadata
  target.__customMetadata = {
    someKey: 'someValue',
  };

  return target;
}

@addMetadata
class Person {
  private _name: string;
  public constructor(name: string) {
    this._name = name;
  }

  public greet() {
    return this._name;
  }
}

function getMetadataFromClass(target: any) {
  return target.__customMetadata;
}

console.log(getMetadataFromClass(Person));

// { someKey: 'someValue' }

function getMetadataFromInstance(target: any) {
  return target.constructor.__customMetadata;
}

console.log(getMetadataFromClass(Person));
// { someKey: 'someValue' }

let person1 = new Person('John');
let person2 = new Person('Lisa');
console.log(getMetadataFromInstance(person1));
console.log(getMetadataFromInstance(person2));
// { someKey: 'someValue' }
// { someKey: 'someValue' }
