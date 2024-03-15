// // Присвоїти змінній apartment об'єкт, який описує квартиру з
// // наступними характеристиками:
// //imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// //descr - опис, значення "Spacious apartment in the city center";
// //rating - рейтинг, значення 4;
// //price - ціна, значення 2153;
// //tags - метаінформація, масив ["premium", "promoted", "top"].

// //Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// // з інформацією про власника.Додай йому наступні властивості:
// //name - ім'я власника, значення "Henry";
// //phone - телефон, значення "982-126-1588";
// //email - пошта, значення "henry.carter@aptmail.com".


// // const apartment = {
// //     imgUrl: "https://via.placeholder.com/640x480",
// //     descr: "Spacious apartment in the city center",
// //     rating: 4,
// //     price: 2153,
// //     tags:  ["premium", "promoted", "top"],
// // }

// // console.log(apartment);

// // apartment.owner = {
// //     ownerName: "Henry",
// //     phone: "982-126-1588", 
// //     email: "henry.carter@aptmail.com",
// // }

// // console.log(apartment);

// // Доповни код, присвоївши оголошеним змінним вирази звернення
// // до відповідних властивостей об'єкта apartment.
// //aptRating - рейтинг;
// //aptDescr - опис;
// //aptPrice - ціна;
// //aptTags - теги.

// // const aptRating = apartment.rating;
// // const aptDescr = apartment.descr;
// // const aptPrice = apartment.price;
// // const aptTags = apartment.tags;
// // console.log(aptRating, aptDescr, aptPrice);

// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних
// // властивостей об'єкта apartment.
// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.

// // console.log(apartment);


// // const ownerName = apartment.owner.ownerName;
// // const ownerPhone = apartment.owner.phone;
// // const ownerEmail = apartment.owner.email;
// // const numberOfTags = apartment.tags.length;
// // const firstTag = apartment.tags[0];
// // // const lastIndex = apartment.tags.length-1;
// // // const lastTag = apartment.tags[lastIndex];
// // const lastTag = apartment.tags[apartment.tags.length-1]

// // console.log(ownerName, ownerEmail, ownerPhone, numberOfTags, firstTag, lastTag);

// // Доповни код, присвоївши оголошеним змінним вирази звернення до
// // відповідних властивостей об'єкта apartment, використовуючи синтаксис
// // «квадратних дужок».

// // aptRating - рейтинг;
// // aptDescr - опис;
// // aptPrice - ціна;
// // aptTags - теги.


// const aptRating = "rating";
// const aptDescr = "descr";
// const aptPrice = "price";
// const aptTags = "tags";



// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     [aptDescr]: "Spacious apartment in the city center",
//     [aptRating]: 4,
//     [aptPrice]: 2153,
//     [aptTags]:  ["premium", "promoted", "top"],
//     owner: {
//         ownerName: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
// }


// // const aptRating = apartment["rating"];

//  console.log(aptRating);

 
// // const userName = "name";
// // const userInfo = {
// //     userPhoto: "http...",
// //     [userName]: "Henry",
// // }

// //Доповни код, оновивши значення властивостей об'єкта apartment:
// // ціну у властивості price на 5000;
// // рейтинг квартири у властивості rating на 4.7;
// // ім'я власника у вкладеній властивості name на "Henry Sibola";
// // масив тегів у властивості tags, додавши в кінець рядок "trusted".
// // Додай об'єкту apartment кілька нових властивостей:

// // area - площа в квадратних метрах, число 60;
// // rooms - кількість кімнат, число 3;
// // location - місце розташування квартири, об'єкт з наступними
// //вкладеними властивостями;
// // country - країна, рядок "Jamaica";
// // city - місто, рядок "Kingston".

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.ownerName = "Henry Sibola";
// apartment.tags.push("trusted");

// apartment.area = 60;
// apartment.room = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment);


// const catName = "Tom";
// const catBreed = "persian";
// const catColor = "black";


// // const favoriteCat = {
// //     catName: catName,
// //     catBreed: catBreed,
// //     catColor: catColor,
// // }

// // робимо коротеий запис
// const favoriteCat = {
//     catName,
//     catBreed,
//     catColor,
// }


// console.log(favoriteCat);



// const userBlock = "block";


// const user = {
//     location: "Kyiv",
//     [userBlock]: "JavaScript",
// }

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
    ownerName: "Liza",
    accountNumber: 123,
    balance: 10000,
    deposit(sumToAdd) {
        bankAccount.balance += sumToAdd;
        return `sum to balance ${bankAccount.balance} `
    },
    withdraw(sumToDraw) {
        if (bankAccount.balance >= sumToDraw) {
        bankAccount.balance -= sumToDraw;
        return `Balance: ${bankAccount.ba lance}`
    }
    else {
        return "sorry, there are not enought money"
    }
}
console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(700));


/*
? Напиши скрипт, який для об'єкта user, послідовно:
? - додає поле mood зі значенням 'happy'
? - замінює значення hobby на 'skydiving'
? - замінює значення premium на false
? - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/
 const user = {
  name: 'Mango',
   age: 20,
   hobby: 'html',
  premium: true,
 };

 user.mood = "happy";
 user.hobby = "skydiving";
 user.premium = user.!premium;

console.log(user);

const userKeys = Object.keys(user);
 console.log(userKeys);

for (const key of userKeys)
 {  console.log(`${key}: ${user[key]}`); } 

//? Зведіть у квадрат кожен елемент цього об'єкта.

const obj = { x: 2, y: 3, z: 4 };

console.log(obj);


// const objKeys = Object.keys(obj);

// console.log(objKeys);

// for (const key of objKeys) {
//   obj[key] = obj[key] ** 2;
// }

// console.log(obj);

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
? підсумовування всіх зарплат і збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

//* Через for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(salaries);

// let sum = 0;

// for (const key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum);

//* Через Object.keys() та for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// console.log(salaries);

// const salariesKeys = Object.keys(salaries);

// console.log(salariesKeys);

// for (const key of salariesKeys) {
//   sum += salaries[key];
// }

// console.log(sum);

//* Через Object.values() та for...of
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };
  
  let sum = 0;
  
  console.log(salaries);
  
  const salariesValues = Object.values(salaries);
  
  console.log(salariesValues);
  
  for (const mcalkdafjalks of salariesValues) {
    sum += mcalkdafjalks;
  }
  
  console.log(sum);