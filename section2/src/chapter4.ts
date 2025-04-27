//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  bio: string;
  location: string;
};

const func = () => {
  type User = {};
};
let user: User = {
  id: 1,
  name: "이정환",
  nickname: "무말랭이",
  bio: "asdasda",
  location: "안양시",
};

type CountryCodes = {
  [key: string]: string;
};

//인덱스 시그니처
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberandStringCodes: CountryNumberCodes = {
  Korea: 110,
};
