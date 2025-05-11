//any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

let num: number = 10;
num = anyVar;

// unKnown
let unKnownVar: unknown;
unKnownVar = "";
unKnownVar = () => {};

if (typeof unKnownVar === "number") {
  //타입 정제
  num = unKnownVar;
}
