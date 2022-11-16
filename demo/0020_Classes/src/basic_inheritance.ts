class Car {
  public position: number = 0;
  protected speed: number = 42;

  move() {
    this.position += this.speed;
  }
}

class selfDrivingCar extends Car {
  move() {
    // start moving around :-)
    super.move();
    super.move();
  }
}
