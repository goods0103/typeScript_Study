//배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["h", "a", "c"];
let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소의 타입들이 다양할 경우
let multiArr: (string | number | boolean)[] = [1, "hello", true];
let multiArr2: (number | boolean)[] = [1, 2, true];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let doubleArr2: (number[] | string[])[] = [
  [1, 2],
  ["a", "b"],
  [1, 2],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1);
tup1.pop();

// const users:  = [
//   ["이정환", 1],

// ]
