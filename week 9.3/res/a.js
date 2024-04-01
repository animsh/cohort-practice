var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender || (Gender = {}));
var user = {
    userName: "userName",
    password: "password",
    gender: Gender.MALE,
};
var firstEl = function (inputArr) {
    return inputArr[0];
};
console.log(firstEl(["a", "b"]));
console.log(firstEl([1, 2]));
