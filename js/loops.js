// console.log("Пройти прямо");
// console.log("Повернути на ліво");

// console.log("Пройти прямо");
// console.log("Повернути на ліво");

// console.log("Пройти прямо");
// console.log("Повернути на ліво");

// console.log("Пройти прямо");
// console.log("Повернути на ліво");

// while(умова){
//   дії - ітерація циклу
// }

// let i = 1;
// const limit = 4;

// // while (i <= limit) {
// //   console.log("Пройти прямо");
// //   console.log("Повернути на ліво");
// //   i++; // i=i+1
// // }
// //ABO
// while (i++ <= limit) {
//   console.log("Пройти прямо");
//   console.log("Повернути на ліво");
// }

// У пользователя є книга с currentPage страниць 5
// Вивести номера стр з 1 по останню 1 2 3 4 5
// Вивести четні номера страниць 2 4

// let currentPage = 1;
// const pagesCount = 5;
// if (currentPage % 2 !== 0)
//   while (currentPage <= pagesCount) {
//     console.log(currentPage);
//     currentPage += 2;
//     // // console.log(currentPage++);
//     // //currentPage++;
//   }

// користувач вводить число, поки не введе коректне
//

// let userValue = Number(prompt("Введіть число"));
// while (Number.isFinite(userValue)) {
//   userValue = Number(prompt("Введіть правильне число"));
// }

// console.log("userValue ** 2 :>> ", userValue ** 2);

// let userValue = prompt("Введіть число");
// while (Number.isFinite(Number(userValue)) || userValue === "") {
//   userValue = prompt("Введіть правильне число");
// }

// console.log("userValue ** 2 :>> ", userValue ** 2);

// Цикл з лычильником (змына циклу)
// for (оголошення лічильника; зміна лічильника){
//   //тіло циклу
// }

// let currentPage = 1;
// const pagesCount = 5;
// // for (let currentPage = 1; currentPage <= pagesCount; currentPage++) {
// //   console.log(currentPage);
// // }

// // Навпаки
// for (let currentPage = pagesCount; currentPage >= 1; currentPage--) {
//   console.log(currentPage);
// }

// Розрахувати сумму чисел від 1 до 5
// let s = 0;
// for (let i = 1; i <= 5; i++) {
//   s = s + i;
// }
// console.log("s :>> ", s);

// Вивести числа від 2 до 16 парні
// const limit = 16;
// let s = 1;
// for (let i = 2; i <= 16; i += 2) {
//   console.log(i);
// }

// Вивести числа выд 1 до 15 не парних
const limit = 15;
let m = 1;
for (let i = 1; i <= 15; i += 2) {
  // console.log("m :>> ", m);
  m *= i; // 1 * 1 * 3 * 5 * 7 * ... * 15
}
console.log("m :>> ", m);
