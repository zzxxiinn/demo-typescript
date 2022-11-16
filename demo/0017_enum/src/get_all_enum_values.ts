enum SomeEnum {
  A,
  B,
}

let enumValues: Array<string> = [];

for (let value in SomeEnum) {
  if (typeof SomeEnum[value] === 'number') {
    enumValues.push(value);
  }
}

console.log(enumValues);
// ['A', 'B']
