function assign<T extends U, U>(target: T, source: U): T {
  for (const id in source) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    target[id] = source[id];
  }
  return target;
}

const x = { a: 1, b: 2, c: 3, d: 4 };
assign(x, { b: 10, d: 20 });
