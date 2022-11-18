interface IPerson {
  name: string;
  age: number;

  breath(): void;
}

interface IManager extends IPerson {
  managerId: number;

  managePeople(people: IPerson[]): void;
}

// class interface
interface ISampleClassInterface {
  sampleVariable: string;

  sampleMethod(): void;

  optionalVariable?: string;
}

class SampleClass implements ISampleClassInterface {
  public sampleVariable: string;
  private answerToLifeTheUniverseAndEverything: number;

  constructor() {
    this.sampleVariable = 'string value';
    this.answerToLifeTheUniverseAndEverything = 42;
  }
  public sampleMethod(): void {
    // do nothing
  }

  private answer(q: any): number {
    return this.answerToLifeTheUniverseAndEverything;
  }
}
