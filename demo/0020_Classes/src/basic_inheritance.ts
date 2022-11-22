class CCar {
  public position = 0;
  protected speed = 42;

  move() {
    this.position += this.speed;
  }
}

class selfDrivingCar extends CCar {
  move() {
    // start moving around :-)
    super.move();
    super.move();
  }
}
