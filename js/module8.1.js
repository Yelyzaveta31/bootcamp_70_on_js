// const products = [
//     {
//       productName: "🍎",
//       price: 5,
//       quantity: 8,
//     },
//     {
//       productName: "🍇",
//       price: 2,
//       quantity: 6,
//     },
//     {
//       productName: "🍋",
//       price: 4,
//       quantity: 6,
//     },
//     {
//       productName: "🍓",
//       price: 1,
//       quantity: 3,
//     },
// ];

// const listElement = document.querySelector(".products-list")

// const productslist = products.map(product => {
//     return `li class = "products-item"`
// })


// // Деструктуризувати наступні об’єкти:
// // Об’єкт user
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com',
// location: {
//   country: "Ukraine",
//   city: "Kiyv",
// }
// }

// console.log(user.age);
// console.log(user.location.city);

// const userCity = user.location.city;
// const userAge = user.age;

// console.log(userCity);
// console.log(userAge);

// const { name, age, email, location, password = "empty"} = user;
// console.log(name, age, email, location, password);

// user.name : userName;


// Об’єкт movie
// const movie = {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },
//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }

// const {title, director: { name, nationality }, actors, release_year, rating: { imdb, rotten_tomatoes } } = movie;
// console.log(title, name, nationality, actors, release_year, imdb, rotten_tomatoes);

// // Об’єкт books
// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ]
// }

// const {count, list} = books;
// const [item1, item2, item3] = list;
// console.log(item1, item2, item3);

// const  { title: firstTitle, author: firstAuthor, year: firstYear} = item1;
// const  { title: secondTitle, author: secondAuthor, year: secondYear} = item2;
// const  { title: thirdTitle, author: thirdAuthor, year: thirdYear} = item3;

// console.log(firstTitle, firstAuthor, firstYear);


// // Деструктуризація масивів

// let friends = ["John", "Tori", "Jason"];
// // const firstFriend = friends[0];

// // let [firstFriend, , thirdFriend, fourthFriend = "no friend"] = friends;
// // firstFriend = "Anton";

// // console.log(firstFriend, thirdFriend, fourthFriend);

// // const [firstFriend, ...otherFriends] = friends;
// // console.log(firstFriend, otherFriends);

// let firstFriend;
// let secondFriend;

// [firstFriend, secondFriend] = friends;
// console.log(firstFriend, secondFriend);


// Напишіть функцію, яка отримує об'єкт з ім'ям,
//  прізвищем та віком та використовує деструктуризацію 
//  для повернення рядка, що містить інформацію про цю 
//  людину в такому форматі: 
//  "Мене звати Ім'я Прізвище і мені Вік років".


function personInfo () {
  return `Мене звати ${name} ${surname} і мені ${age} років`

}

const person = {
name: 'Nelli',
surname: 'Laroy',
age: 25
};


const {name, surname, age} = person
console.log(personInfo(name, surname, age));







