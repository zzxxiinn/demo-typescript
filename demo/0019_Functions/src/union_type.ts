function whatTime(hour: number | string, minte: number | string): string {
  return `${hour}:${minte}`;
}

whatTime(1, 30); //'1:30'
whatTime('1', 30); //'1:30'
whatTime(1, '30'); //'1:30'
whatTime('1', '30'); //'1:30'

// 如果在函数中需要判断参数类型，得额外处理
function addTen(start: number | string): number {
  if (typeof start === 'string') {
    return parseInt(start) + 10;
  } else {
    return start + 10;
  }
}
