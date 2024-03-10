/*
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */


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



// const totalMinutes = 90;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);