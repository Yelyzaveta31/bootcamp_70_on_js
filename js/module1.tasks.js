

/*
 ? Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */
const apples = 47;
const grapes = 135;

const summ = apples + grapes;
console.log(summ);

const diff = apples - grapes;
console.log(diff);

/*
 ? Заміни вираз перевизначення комбінованим оператором
 */

//  Без комбінованого оператора
// let students = 100;
//  students = students + 50;
// console.log(students);

//  З комбінованим оператором
let students = 100;
students += 50;
console.log(students);
/*

 ? Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

const result = 108 + (223 - 2) * 5; // 1213
console.log(result);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/

const totalMinutes = 90;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;



console.log(hours);
 console.log(minutes);


 //? Обʼєднайте два рядки в один і виведіть до консолі.

const firstName = 'Chelsy';
const lastName = 'Emerald';

console.log(firstName + " " + lastName)


//? Підставте значення зміної quantity до рядка orderMsg, використоуючи шаблоні рядки.

const quantity = 15;
const orderMsg = `You ordered ${quantity} bots`;
console.log(orderMsg);

/*
  ? Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення:
  ? Hello <імʼя> <прізвище>, you are logged in.
*/

const firstNamee = prompt("What is your name?");
const lastNamee = prompt("What is your last name?");
const message = `Hello ${firstNamee} ${lastNamee}, you are logged in.`
console.log(message);


//? Дізнайтесь довжину рядка message.

const messagee = 'This string is 28 chars long';
console.log(messagee.length);

// console.log(message.length);

// console.log('Hello'.length);

/*
 ? Склади фразу за допомогою шаблонних рядків
 ? A has B bots in stock, де A, B - змінні вставлені в рядок.
 */


 const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const totalBots = repairBots + defenceBots;
const msg = `${companyName} has ${totalBots} bots in stock`;
console.log(msg);
// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;

// console.log(msg); // "Cyberdyne Systems has 200 bots in stock"