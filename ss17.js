let username = ["huong", "cao", "ha"];
// username.forEach((e, i) => {
//   console.log(i, e);
// });

// let rs = username.map((element, index) => `${element} thi hackathon`);
// console.log(rs);

// let rs2 = username.findIndex((element, index) => element[0] == "h");
// console.log(rs2);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = username.reduce((pre, curent) => (pre += curent), "=>");
console.log(sum);
numbers;

let friend = {
  fullname: "Nguyễn Công Hưởng",
  age: 18,
  address: "Hoài Đức - Hn",
  hanesome: "yes",
  famimy: "yes",
  hobbies: ["eating", "sleeping", "playgame", "coding"],
};

for (let key in friend) {
  console.log(key);
}