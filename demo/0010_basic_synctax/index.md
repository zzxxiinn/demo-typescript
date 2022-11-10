## Basic Syntax for Typescript


### 类型定义

- **number** (both integers and floating point numbers)
- **string**
- **boolean**
- **Array** (two ways to define array types):
  - `Array<T>`
  - `T[]`
- **Tuples**
  - `[boolean, string]`
  - `[number, number, number]`
- **Object** {}
  - `{name: string, age: number}` - object with name and age attributes
  - `{[key: string]: number}` - a dictionary of numbers indexed by string
- **enum** - `{ Red: 0, Blue, Green }` - enumeration mapped to numbers
- **Function**
  - `(param: number) => string`
  - `() => number`
  - `(a: string, b?: boolean) => void`
- **any** - 允许任何类型。涉及 any 的表达式不进行类型检查。
- **void** - 表示“无”，可以作为函数返回值。只有 `null` 和 `undefined` 是 `void`。
- **never**
  - `let foo: never;` - 类型保护下永远不为真的变量类型
  - `function error(message: string): never { throw new Error(message); }` - 永不会返回的函数（没有return的函数默认返回 void）。
- **null** - type for the value null. null is implicitly part of every type, unless strict null checks are enabled.


### 类型转换

显示地转换(explicit casting):

```typescript
var derived: MyInterface;
(<ImplementingClass>derived).someSpecificMethod();
```

为了避免在 jsx 文件中出现错误，也可以使用 `as` 关键字这样写：

```typescript
var derived: MyInterface;
(derived as ImplementingClass).someSpecificMethod();
```