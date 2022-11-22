interface IResult<T> {
  wasSuccessful: boolean;
  error: T;
}

const result: IResult<string> = {
  wasSuccessful: true,
  error: 'hello',
};

const error: string = result.error;

//====================================//

interface IRunnable<T, U> {
  run(input: T): U;
}

var runnable: IRunnable<string, number> = {
  run(input) {
    return 1;
  },
};
var input: string = '123';
var result_01: number = runnable.run(input);

//====================================//

interface INewResult<T> {
  wasSuccessful: boolean;
  error: T;
  clone(): INewResult<T>;
}

class Result<T> implements INewResult<T> {
  wasSuccessful: boolean;

  constructor(public result: boolean, public error: T) {
    this.wasSuccessful = true;
  }

  clone(): INewResult<T> {
    return new Result<T>(this.result, this.error);
  }
}

class StringResult implements IResult<string> {
  wasSuccessful: boolean;

  constructor(public result: boolean, public error: string) {
    this.wasSuccessful = false;
  }

  public clone(): IResult<string> {
    return new StringResult(this.result, this.error);
  }
}
