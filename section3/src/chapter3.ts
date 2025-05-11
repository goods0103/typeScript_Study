// 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

//업캐스팅
num1 = num2;

// num2 = num1;

//어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

//서브타입
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "aa",
  price: 33000,
  skill: "react",
};

book = programmingBook;
// programmingBook = book;

let book2: Book = {
  name: "aa",
  price: 33000,
  //   skill: "react",
};

//초과 프로퍼티 검사

let book3: Book = programmingBook;

//변수를 초기화하거나, 매개변수에 저장할 때 객체 리터럴 사용x

function func(book: Book) {}

func({
  name: "asd",
  price: 11111,
  //   skill: "asdasd",
});

func(programmingBook);
