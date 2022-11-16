let day: [number, string];
day = [0, 'Monday'];

// day = ['zero', 'Monday']; // invalid: 'zero' is not numeric
console.log(day[0]); // -> 0
console.log(day[1]); // -> Monday

day[3] = 'Saturday'; // Tuple type '[number, string]' of length '2' has no element at index '3'.
day.push('Saturday');
day.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
