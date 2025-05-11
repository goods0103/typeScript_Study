// unknown

function unkownExam() {
  let a: unknown = 1;
  let b: unknown = "asdasd";
  let c: unknown = true;

  let unkonwnVar: unknown;

  // 다운캐스팅 x
  //   let num: number = unkonwnVar;
}

// never
// 모든 집합의 부분집합 sub type
// 공집합

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
}

// void

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
    let voidVar: void = undefined;
  }
}

//any
//치트키

function anyExam() {
  let unkonwnVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unkonwnVar;
  undefinedVar = anyVar;
  //   neverVar = anyVar;
}
