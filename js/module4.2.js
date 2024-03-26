// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.

const rectangle = {
    length: 5,
    width: 10,
   calculateArea() {
        return this.length + this.width; 
    }
}



// Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  метод "login", який буде перевіряти правильність введеного email та password.
// Використайте інпути для запису значень властивостей в об’єкт


// const user = {
//     nameUser: "Liza",
//     email: "Liza@gmail",
//     password: "liza9374",
//     login () {
//         if this.email !== prompt("Enter your email") && this.password !== prompt("password")
//         {
//             return "wrong e-mail and password"
//         }
//     }
// }


 const friends = [
 { name: 'Mango', online: false },
 { name: 'Kiwi', online: true },
 { name: 'Poly', online: true },
 { name: 'Ajax', online: false },
 ];

console.table(friends);

function findFriendByName(allFriends, friendName) {
    for (const friend of allFriends) {
        if (friend.name === friendName) {
            return friend;
        }
        
    }
    return `${friendName} не знайдено!` 
}
/*
*/
// function findFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name.toLowerCase() === friendName.toLowerCase()) {
//       return friend;
//     }
//   }

//   return `${friendName} не знайдено!`;
// }

console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
? Отримуємо імена всіх друзів
*/
// function getAllNames(allFriends) {
//   const allNames = [];

//   for (const friend of allFriends) {
//     allNames.push(friend.name);
//   }

//   return allNames;
// }

// console.log(getAllNames(friends));

/*
? Отримуємо імена тільки тих друзів, які зараз онлайн
*/
// function getOnlineFriends(allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend.name);
//     }
//   }

//   return onlineFriends;
// }

// console.log(getOnlineFriends(friends));


// ? Напишіть функцію calcTotalPrice(stones, stoneName),
// ? яка приймає масив об'єктів та рядок з назвою каменю.
// ? Функція рахує і повертає загальну вартість каміння з
// ? таким ім'ям, ціною та кількістю з об'єкта

 const stones = [
 { name: 'Смарагд', price: 1300, quantity: 4 },
{ name: 'Діамант', price: 2700, quantity: 3 },
{ name: 'Сапфір', price: 400, quantity: 7 },
{ name: 'Щебінь', price: 200, quantity: 2 },
 ];

 function calcTotalPrice(stones, stoneName) {
    for (const stone of stones) {
          if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
  return stone.price * stone.quantity;
     }   }

//   return `${stoneName} не знайдено!`;
// }

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Аконіт'));