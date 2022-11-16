abstract class Machine {
  constructor(public manufacturer: string) {}

  summary(): string {
    return `${this.manufacturer} makes this machine.`;
  }

  abstract moreInfo(): string;
}

class MyCar extends Machine {
  constructor(
    manufacturer: string,
    public position: number,
    protected speed: number
  ) {
    super(manufacturer);
  }

  move() {
    this.position += this.speed;
  }

  moreInfo(): string {
    return `This is a car located at ${this.position} and going ${this.speed}mph!`;
  }
}

let myCar = new MyCar('Konda', 10, 70);
myCar.move(); // position is now 80
console.log(myCar.summary()); // prints "Konda makes this machine."
console.log(myCar.moreInfo()); // prints "This is a car located at 80 and going 70mph!"
