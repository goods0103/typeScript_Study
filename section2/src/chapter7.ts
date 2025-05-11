// void
// void => 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;
// a = null;

//never
//never => 존재하지 않는 불가능한 타입
// 반환값이 있는 거 자체가 모순일 때
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;
let b: never;
// b = null;
// b = undefined;
// b = anyVar;
