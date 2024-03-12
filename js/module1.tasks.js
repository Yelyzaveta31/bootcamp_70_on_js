

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


// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням:
// Значення змінної a дорівнюватиме 7 - використовуй оператор +=
// Значення змінної b дорівнюватиме 6 - використовуй  оператор -=
// Значення змінної c дорівнюватиме 45 - використовуй оператор *=
// Значення змінної d дорівнюватиме 2 - використовуй оператор /=

a = a + 2;
a += 2;
console.log(a)

b = b - 4;
b -= 4;
console.log(b)

c = c * 8;
c *= 8; 
console.log(c);

 d = d / 10;
d /= 10;
console.log(d);

// Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень.
// Бонус дорівнює 20 % від зарплати за додаткові години.(використати тернарний оператор)

const salary = Number(prompt("Enter your salary"))
const bonus = 20/100 * salary
const totalSalary = salary + bonus;
console.log(totalSalary);

// Напишіть скрипт, який знаходить площу прямокутника. Висота 23см, шириною 10см - всі данні повинні зберігатися в змінних.  Значення площі повинно зберігається в числовій змінній. Виведіть повідомлення для користувача з результатом.

const height = 23;
const weight = 10;
const square = height * weight;
const message = `Якщо висота прямокутника складає: ${height}, а ширина складає ${Width} тоді його площа дорівнюватиме ${square}`;

// const reactangleWidth = 10;
// const reactangleHeight = 50;
// const squareReactangle = reactangleWidth * reactangleHeight;
// console.log(message);



//Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .length, вивести в консоль кількість символів у рядку.//
const firstName = "Liza";
const lastName = "Popkova";
const fullName = firstName + " " + lastName;
console.log(fullName.length)


// const myName = "Veronika";
// const surName = "Karaulova";
// const fullName = myName + " " + surName;
// console.log(fullName);
// const nameLength = fullName.length;
// console.log(fullName.length);
// const myName = prompt("Please enter your name");
// const surName = prompt("Please enter your surname");
// //const fullName = myName + " " + surName;//
// const fullName = `My Name is ${myName} and my surname is ${surName}`
// console.log(fullName);
// const nameLength = fullName.length;
// console.log(fullName.length);