// const book = {
//     year: 2020,
//     author: "Boris",
// }

// const book1 = Object.create(book);
// console.log(book);
// console.log(book1);
// console.log(book1.year);
// book1.bookName = "Tom";

// const book2 = Object.create(book);
// console.log(book);
// console.log(book2);
// book2.bookName = "Potter"


// const newBook1 = Object.create(book1);
// newBook1.isNewBook = true;
// console.log(newBook1);



// function foo() {
//   console.log('foo -> this', this);
// }

// foo(); // undefined

//? Що буде виведено в консоль

//  const book = {
//  title: 'React for beginners',

//   showThis() {
//     console.log('showThis -> this', this);
//   },

//  showTitle() {
//    console.log('showTitle -> this.title', this.title);
//   }, };

//  book.showThis(); // book

// const outerShowThis = book.showThis;

//  outerShowThis(); // undefined

// const outerShowTitle = book.showTitle;

// outerShowTitle(); // Error

// //? Що буде виведено в консоль

// let user = {
//   name: 'Джон',
//   go() {
//     console.log(this);
//   },
//  };

//  const goFn = user.go;
//  goFn(); // undefined

/* 
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const makeUser = function () {
// this = undefined;

//  return {
//     name: 'Джон',
//     ref: this,  }; };

//  const user = makeUser();

//  console.log(user.ref.name); // Error

// //? Що буде виведено в консоль

//  function makeUser() {
//  this = undefined;

//    return {
//    name: 'Джон',
//     ref() {
//       return this;
//     },
//   }; }

// const user = makeUser();

// console.log(user.ref().name); // Джон

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
? розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
? кількістю з властивості stones.
 */

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(stoneInfo => {
//       return stoneInfo.name.toLowerCase() === stoneName.toLowerCase();
//     });

//     if (stone === undefined) {
//       return `${stoneName} не знайдено!`;
//     }

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Aconit')); // Aconit не знайдено!


// ? Фільтрація за діапазоном
// ?
// ? Напишіть функцію filterRange(numbers, a, b), яка приймає масив numbers, 
// ? шукає в ньому елементи більші-рівні min та менші-рівні max і віддає масив цих елементів.
// */

const filterRange = (numbers, a, b)  => {
  return numbers.filter((el, inx, arr) => {
    return el >= min && el <= max
    
    })
}

 console.log([10, 20, 2, 3, 56, 4]);
 console.log(filterRange([10, 20, 2, 3, 56, 4], 3, 10));
