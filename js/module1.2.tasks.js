/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
let userNumber = prompt("Enter your numder");
userNumber = Number(userNumber);
console.log(userNumber);

// const userInput = Number(prompt('Enter your number'));
// console.log(userInput);


//? Дізнайтесь числове значення ширини елемента.
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);

// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);


//? Дізнайтесь числове значення висоти елемента.
let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);

// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

//? Попросіть користувача ввести два числа, складіть їх та виведіть результат у консоль.
const firsNumber = Number(prompt("Enter the first number"));
const secondNumber = Number(prompt("Enter the second number"));
const finalNumber = Number(firsNumber + secondNumber);
console.log(finalNumber);

// const numA = Number(prompt('Enter first number'));
// const numB = Number(prompt('Enter second number'));
// const result = numA + numB;
// console.log(result);


/*
 ? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 ? значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 ? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

let value = 27.9;


// value = Math.round(value);

// console.log(value);

// console.log(Math.min(0, 1, -2, -10, 2.5, 10));
// console.log(Math.max(0, 1, -2, -10, 2.5, 10));

// ? Згенеруйте рандомне число в діапазоні від 0 до 255;

const randomNumber = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
console.log(randomNumber);

// Math.floor(Math.random() * (max - min + 1)) + min;



// За допомогою об’єкту Math виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18)

function findMaxNumbermaxNumber() {
  const maxNumber = Math.max (2, 34, 99, 3, 22, 36, 733, 18);
  return maxNumber;
  
}
// console.log(Math)
// function findMaxNumber() {
//     const maxNumber = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
//     return maxNumber;
// }
// findMaxNumber()


// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
// - function declaration (оголошення функції)

function declaration  (number) {
  const findNumber = math.sqrt(number);
  return findNumber
}


// const result = sqrtNumber(25);
// function sqrtNumber(number) {
//     const findNumber = Math.sqrt(number);
//     return findNumber;
// }
// console.log(result);

// // 2 - function expression (функціональний вираз) 
// const sqrtNumber = (number) => {
//   const findNumber = Math.sqrt(number);
//   return findNumber;
// }
// const result = sqrtNumber(25);
// console.log(result);


// / Створіть змінну userName з ім’ям користувача і змінну
// payment з сумою до оплати.За допомогою шаблонного рядка виведіть н

// а екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень».


const userName = prompt("Eneter your name");
const totalPrice = prompt("Eneter your sum")

function payment(userName, totalPrice) {
  alert(`«Дякуємо, ${userName}! До сплати ${totalPrice} гривень».`)

}
console.log(payment(userName, totalPrice));

// const userName = prompt('enter your name');
// const totalPrice = prompt('enter your sum');

// function showPayment(userName, totalPrice) {
//     alert(`«Дякуємо, ${userName}! До сплати ${totalPrice} гривень»`)
// };

// const result = showPayment(userName, totalPrice);
// console.log(result)