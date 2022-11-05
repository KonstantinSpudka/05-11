// Функції

// Повторне використання коду

// Оголошення функціцї
// function functionName{}
// {
// function body
// }

// functionName{} - виклик функції

// function sayHello() {
//   console.log("Hello");
// }
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// // Передавання до функції

// const userName = "Ivo";

// function sayHelloToUser(name) {
//   console.log(`Hello, ${name}`);
// }
// sayHelloToUser(userName);

// // Повернення значень із функції

// function sumAB(a, b) {
//   const s = a + b;
//   return s;
// }
// const sum = sumAB(4, 5);
// console.log("sum :>> ", sum);
// // 2
// console.log("sumAB(15, 30) :>> ", sumAB(15, 30));

// // Написати функцію для розрахунку числа в степені 4: 5=>625; 2+>16

// function in4(num) {
//   return num ** 4;
// }
// console.log(in4(2));

// Написати функцію для розрахунку суми чисел від 1 (^m) до N
// 5 => 1+2+3+4+5 = 15
// 5,7 => 5+6+7 = 18

// function sumToMaxValue(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumToMaxValue(5, 10));

// Написати функціюб яка повертає true  для повнолітнього користувача
// false - для неповнолітнього

// function isAdult(age) {
//   let x = age >= 18 ? true : false;
//   return x;
// }

// console.log(isAdult(17));

// 2
// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(18));

// Написати функцію, яка за рядком "Ivo Smith" сформує рядок з ініціалами ('IS)

function getInitials(userFullName) {
  // знайти індекс пробіла
  const spaceIndex = userFullName.indexOf(" ");

  // скомпанувати 1 символ після пробілу
  const initials =
    userFullName.substring(0, 1) +
    userFullName.substring(spaceIndex + 1, spaceIndex + 2);
  return initials;
}

console.log('getInitials("") :>> ', getInitials("Ivo Smith"));
console.log('getInitials("") :>> ', getInitials("Wally Brawn"));
