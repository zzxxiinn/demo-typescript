function log<T>(target: T) {
  console.log(target);

  return target;
}

@log
class LogPerson {
  private _name: string;

  public constructor(name: string) {
    this._name = name;
  }

  public greet() {
    return `hello I'm ${this._name}`;
  }
}
