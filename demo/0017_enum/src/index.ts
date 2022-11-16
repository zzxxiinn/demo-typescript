const enum Language {
  TriditioalChinese,
  SimplifiedChinese,
  English,
}

let nativeLanguage = Language.SimplifiedChinese;
console.log(nativeLanguage); // 0
console.log(Language['English']); // 2

// 默认的值是数字，并且会累加
// 在初始化的时候，可以指定值基类型
enum MyMimeType {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  PDF = 'application/pdf',
}

enum FancyType {
  OneArr = <any>[1],
  TwoArr = <any>[2, 2],
  ThreeArr = <any>[3, 3, 3],
}

// 将会被转换成这样的 Javascript 代码
// var FancyType;
// (function (FancyType) {
//   FancyType[FancyType["OneArr"] = [1]] = "OneArr";
//   FancyType[FancyType["TwoArr"] = [2, 2]] = "TwoArr";
//   FancyType[FancyType["ThreeArr"] = [3, 3, 3]] = "ThreeArr";
// })(FancyType || (FancyType = {}));
