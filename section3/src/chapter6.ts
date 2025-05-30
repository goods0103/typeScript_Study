//type 단언
//type assertion

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "asd";
person.age = 12;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  //초과 프로퍼티 값 발생
  breed: "진도",
} as Dog;

//타입 단언의 규칙
//값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나 서브타입이어야한다

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
// 다중단언
// 쓰지마셈
let num3 = 10 as unknown as string;

//const 단언

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = ''

// Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "제영",
};

const len: number = post.author!.length;
