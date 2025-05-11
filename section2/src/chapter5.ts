// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}
const user1 = {
  name: "이정환",
  role: Role.ADMIN,
  language: Language.korean,
};
const user2 = {
  name: "dwd",
  role: Role.USER,
};
const user3 = {
  name: "aaa",
  role: Role.GUEST,
};

console.log(user1, user2, user3);
