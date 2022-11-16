class CarAccessor {
  public position: number = 0;
  private _speed: number = 42;
  private _MAX_SPEED = 100;

  move() {
    this.position += this._speed;
  }

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = Math.min(value, this._MAX_SPEED);
  }
}

let car = new CarAccessor();
car.speed = 120;
console.log(car.speed); // 100
