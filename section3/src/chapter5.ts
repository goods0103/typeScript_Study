//타입 추론

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "",
  profile: {
    nickname: "",
  },
  urls: ["asdasdad"],
};

let { id, name, profile } = c;

function func(message = "hello") {
  return "hello";
}

//암묵적 any타입
let d;
d = 10;
d.toFixed();
// d.toUpperCase();

d = "asd";
d.toUpperCase();

//number리터럴타입 10으로 되버림
const num = 10;
let arr = [1, "ㅁㄴㅇㅁㄴㅇ"];
