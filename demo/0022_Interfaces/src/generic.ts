// Declaring Generic Parameters on Interfaces
interface IStatus<U> {
  code: U;
}

interface IEvents<T> {
  list: T[];
  emit(event: T): void;
  getAll(): T[];
}

// Implementing Generic Interfaces
class State<T> implements IEvents<T> {
  list: T[];

  constructor() {
    this.list = [];
  }

  emit(event: T): void {
    this.list.push(event);
  }

  getAll(): T[] {
    return this.list;
  }
}

const s = new State<IStatus<number>>();

s.emit({ code: 200 }); // works
s.emit({ code: '500' }); // type error

// 下面，我们约束 State 类的类型为 IStatus<Code>, 后续的 emit 方法就需要强制符合 Code 类型。
// 通用接口对于静态类型代码来说是一个非常有用的工具。
interface Code {
  message: string;
  status: number;
}
const s2 = new State<IStatus<Code>>();

s2.emit({ code: { message: 'OK', status: 200 } });
s2.getAll()
  .map((event) => event.code)
  .forEach((event) => {
    console.log(event.message);
    console.log(event.status);
  });
