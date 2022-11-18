function addMeta(metadata: any) {
  return function (target: any) {
    target.__customMetadata = metadata;

    return target;
  };
}

@addMetadata({ guid: '417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf' })
class PersonInfo {
  private _name: string;
  public constructor(name: string) {
    this._name = name;
  }
  public greet() {
    return this._name;
  }
}

function getMetaFromClass(target: any) {
  return target.__customMetadata;
}

console.log(getMetaFromClass(Person));
// { guid: "417c6ec7-ec05-4954-a3c6-73a0d7f9f5bf" }
