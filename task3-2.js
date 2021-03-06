// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться

// const countProps = function (obj) {
//   "use strict";
//   // Write code under this line
//   const keys = Object.keys(obj);
//   let counter = 0;
//   for (const key of keys) {
//     counter++;
//   }
//   return counter;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// const countProps = function (obj) {
//   "use strict";
//   // Write code under this line

//   const values = Object.values(obj);
//   let counter = 0;
//   for (const value in values) {
//     //counter++;
//     counter = counter + 1;
//   }
//   return counter;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

//правильный вариант

const countProps = function (obj) {
  "use strict";
  // Write code under this line
  const keys = Object.keys(obj);
  return keys.length;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
