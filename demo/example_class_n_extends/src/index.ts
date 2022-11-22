class Car {
    name: string;
    engineCapacity: string;

    constructor(name: string, engineCapacity: string) {
        this.name = name
        this.engineCapacity = engineCapacity
    }

    describeCar() {
        console.log(`${this.name} car comes with ${this.engineCapacity} displacement`);
    }
}

new Car("maruti ciaz", "1500cc").describeCar()

class HondaCar extends Car {
    seatingCapacity: number;

    constructor(name: string, engineCapacity: string, seatingCapacity: number) {
        super(name, engineCapacity);
        this.seatingCapacity = seatingCapacity;
    }

    describeHondaCar() {
        super.describeCar();
        console.log(`this cars comes with seating capacity of ${this.seatingCapacity}`);
    }
}

new HondaCar("honda jazz","1200cc",4).describeHondaCar();