/*
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */


/*
? Запросіть у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/

const number = Number(prompt("Введіть будь-яке число"));
if (number === 10) {
    alert ("Вірно") ;
} else {
   alert ("Невірно");
}



/*
? Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/

const balance = 1000;
if (balance > 0) {
    console.log('Positive')
} else {
    console.log('Negative')
}



/*
? В залежності від значення в змінній login, потрібно формувати відповідне повідомлення.
? Співробітник - Привіт
? Директор - Вітаю
? '' - Немає логіну
? В інших випадках повідомлення має бути порожнім.
*/



const login = "Співробітник";
let message;
if (login === "Співробітник") {
    message = "Привіт"; 
} else if (login === "Директор") {
    message = "Вітаю";
}
else if (login === '') {
    message = "Немає логіну"
}
else {
    message = '';
}
    
console.log(message);



/*
? Перепишіть конструкцію if з використанням тернарного оператора.
*/

// const a = 1;
// const b = 1;

const result = a + b < 4 ? "Мало" : "Багато";
 if (a + b < 4) {
    message3 = "Мало";
 } else {
    message3= "Багато"; 
 }
console.log(message3);


/*
?  Перепишіть if..else за допомогою декількох тернарних операторів.
*/

const login2 = 'Співробітник';

let message2 = login === 'Співробітник'  ? 'Привіт' : login === 'Директор' ? 'Вітаю' : login === ''  ? 'Немає логіну'  : '';


/*
? Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
? рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
? то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 26;
let string;

if (minutes === 0) {
    string = `${hours}г`;  
} else {
    string = `${hours}г + ${minutes} + хв`;
}

console.log(stringtring);

// 3 Варіант
// const hours = 14;
// const minutes = 26;
// const timestring = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// console.log(timestring);
/*


? Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
?
? Якщо до дедлайну 0 днів - виведи рядок "Today"
? Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
? Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
? Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */


const dedline = 2;
if (dedline === 0) {
    console.log('Today'); 
} else  if (dedline === 1) {
    console.log('Tomorrow'); 
}
else if (dedline === 2) {
    console.log('Overmorrow');
}
else {
    console.log('Date in the future');
}
