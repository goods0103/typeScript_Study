//object

let user: {
  id?: number;
  readonly name: string;
} = {
  id: 1,
  name: "이정환",
};

const jy = {
  name: "",
  address: "",
};

let user2: {
  id?: number;
  readonly name: string;
} = {
  id: 1,
  name: "이정환",
};

user = {
  name: "aa",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "asdasdad",
};

// config.apiKey = "asdasdddd";

//property based type system(구조적 타입 시스템)
//명목적 타입 시스템
