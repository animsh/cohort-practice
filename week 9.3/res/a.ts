type User = {
  userName: string;
  password: string;
  gender: Gender;
};

enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

const user: User = {
  userName: "userName",
  password: "password",
  gender: Gender.MALE,
};

const firstEl = <T>(inputArr: T[]): T => {
  return inputArr[0];
};

console.log(firstEl(["a", "b"]));
console.log(firstEl([1,2]));