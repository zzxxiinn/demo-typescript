// firstname必须要传，lastname可选
function buildName(firstname: string, lastname?: string) {
  // ...
}

// 比传参数必须在最前面，这样会出错 A required parameter cannot follow an optional parameter.
// function buildName2(firstname?: string, lastname: string) {
//   //...
// }

// 参数默认值
function buildName3(firstName: string, lastName = 'Smith') {
  // ...
}

// Function 作为参数
function foo(othorFunc: Function): void {}

// 如果接受的是构造函数
function bar(constructorFunc: { new () }) {
  new constructorFunc();
}
function baz(constructorWithParamsFunc: { new (num: number) }) {
  new constructorWithParamsFunc(1);
}

interface IConstructor {
  new ();
}
function pux(constructorFunc: IConstructor) {
  new constructorFunc();
}

interface INumberConstructor {
  new ();
}
function pur(constructorFunc: INumberConstructor) {
  new constructorFunc();
}
