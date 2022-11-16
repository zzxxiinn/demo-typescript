class CarSimple {
  public position: number = 0;
  private speed: number = 42;

  move() {
    this.position += this.speed;
  }
}
