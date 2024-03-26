function sumSalary(arr, countTax, showMassege) {
    let totalSalary = 0;

    for (const key of arr) {
        const salaryAfterTax = key - countTax(key);
        totalSalary += salaryAfterTax;
    }

    const message = showMassege(totalSalary);
    return message;
}

let sal = [2200, 4000, 5000];

function showMassege(totalSalary) {
    return `Сума зарплат становить ${totalSalary}`;
}

function countTax(salary) {
    return salary * 0.2;
}

console.log(sumSalary(sal, countTax, showMassege));


// ЗНайти добуток чисел з масиву

// const array = [2, 4, 5, 65, 78, 98];

// function multiply(array){
//     let total = 1;

//     for (const key of array) {
//         total += key;  
//     }
//     return total;
// }

// console.log(multiply(array));


//перепишемо цю ж задачу методом forEach

const array = [2, 4, 5, 65, 78, 98];

function multiply(arrayNumbers){
    let total = 1;
    arrayNumbers.forEach(number => {
        total *= number  
    });
   

    // for (const key of array) {
    //     total += key;  
    // }
    return total;
}

console.log(multiply(array));


const arrayUsers = [
    { nameUser: "Anna",
    location: "Ukraine",
    },
    { nameUser: "Yana",
    location: "Poland",
    },
    
    { nameUser: "Ivan",
    location: "France",
    },
    
    { nameUser: "Liza",
    location: "Spain",
    },
];

const createArrayNames = arrayNamesFun => {
    const arrayNames = arrayNamesFun.map((keyUser => keyUser.nameUser));
return arrayNames
}
console.log(createArrayNames(arrayUsers));


// ? Напишіть функцію each(array, callback), яка першим параметром очікує масив,
// ? а другим - функцію, яка застосовується до кожного елемента масиву. Функція
// ? each повинна повернути новий масив, елементами якого будуть
// ? результати виклику коллбека.
//  */


function each(array, callback) {
    const newArray = [];
    for (const item of array) {
        newArray.push(callback(item));
      }
    
      return newArray;
    }


    // Уявіть, що у вас є масив з оцінками студентів за тест. Вам потрібно обчислити середню оцінку.
    //  Використовуйте метод forEach для проходження по всім оцінкам і підрахунку загальної кількості балів.
    //  Потім розділіть загальну кількість балів на кількість оцінок, щоб отримати середню оцінку.

    const grades = [85, 90, 75, 95, 80];
    let totalGrades = 0;

    grades.forEach(grade => {
        totalGrades += grade
    });

    const averageGrade = totalGrades / grades.length;

    // Уявіть, що у вас є масив із списком імен користувачів. Напишіть програму, яка використовує метод forEach, 
    // щоб вивести кожне ім'я користувача на консоль разом із вітальним повідомленням "Hello, [ім'я]!".

const userNames = ["Alice", "Bob", "Charlie", "David"];
let name;
userNames.forEach(name => {
    console.log(`Hello, ${name}!`)
});



// У вас є масив об'єктів, який містить інформацію про
//  різних користувачів. 
//  Кожен об'єкт має поля name та age. 
//  Напишіть програму, яка використовує метод forEach,
//   щоб вивести інформацію про кожного користувача на консоль 
// в наступному форматі: "Name: [ім'я], Age: [вік]".


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ];
  users.forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  })

 



//   Уявіть, що у вас є масив з числами, 
//   які представляють довжину сторін прямокутників.
//    Напишіть програму, яка використовує метод map, 
//    щоб перетворити цей масив на масив, 
//   який містить площу кожного прямокутника.

  const rectangleSides = [
    { length: 5, width: 10 },
    { length: 3, width: 7 },
    { length: 8, width: 6 }
  ];

  const rectangleArea = rectangleSides.map(side => {
    return side.length * side.width
  })

  console.log(rectangleArea);


//   ? Нехай функція getModels повертає масив моделей 
//   (поле model) всіх автомобілів.
//  */

const allCars = [
    { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
    { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
    { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
    { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
    { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
    { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
    { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
    { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
    { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
  ];
  
  const getModel = cars => {
    const modelArr = allCars.map(car => {
        return car.model
    })
    return modelArr;
  }


  /*
? Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
? значенням властивості price залежно від переданої знижки.
 */

const makeCarsWithDiscount  = cars => {
    const priceArr = allCars.map(car => {
        car.price = car.price - car.price * discount;
    })
}


// Модуль 5.2



const products = [
    {
      productName: "🍎",
      price: 5,
      quantity: 8,
    },
    {
      productName: "🍇",
      price: 2,
      quantity: 6,
    },
    {
      productName: "🍋",
      price: 4,
      quantity: 6,
    },
    {
      productName: "🍓",
      price: 1,
      quantity: 3,
    },
];

//Знайдемо кількість фруктів в кошику

const totalQuantity = (products)  => products.reduce((ttl, product) =>
 ttl + product.quantity, 0)

 console.log(totalQuantity(products))


//  Припустимо, що у вас є масив об'єктів, який містить інформацію про різних 
//  користувачів. Кожен об'єкт має поля name та age.
//   Ви хочете створити новий масив, що містить лише користувачів, 
//  які досягли повноліття, тобто мають вік 18 або більше.

const userss = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 16 }
  ];

  const newArray = userss.filter(user => user.age >= 18) 
console.log(newArray);
  
//   Напишіть програму, яка використовує метод filter, 
//   щоб створити новий масив, що містить тільки оцінки студентів, 
//   які перевищують або дорівнюють 90.

const gradess = [85, 92, 88, 95, 78, 90, 87, 94];

const newGradesArr = gradess.filter(grade => grade >= 90);
console.log(newGradesArr);

// Припустимо, що у вас є масив об'єктів, який містить інформацію 
// про різних користувачів. Кожен об'єкт має поля name та age. 
// Ви хочете знайти першого користувача в масиві, який має певне ім'я.

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
  ];

  const userFind = "Bob";
  const foundUser = users.find(user => user.name === userFind);
  if (foundUser) {
  console.log(`User ${userFind} found. Age: ${foundUser.age}`);
} else {
  console.log(`User ${userFind} not found.`);
}


// Припустимо, що у вас є масив чисел, який представляє вартість товарів у 
// кошику покупця. Напишіть програму, яка використовує метод reduce, 
// щоб підрахувати загальну вартість всіх товарів у кошику.

const cart = [50, 30, 25, 10, 40];

const totalCost = cars.reduce((acc, el) => acc + el, 0);

// Припустимо, що у вас є масив об'єктів, який містить інформацію про різних 
// користувачів. Кожен об'єкт має поля name, age та balance.
//  Напишіть програму, яка використовує метод reduce,
//  щоб знайти середній вік користувачів усього масиву.

const users = [
    { name: "Alice", age: 25, balance: 200 },
    { name: "Bob", age: 30, balance: 350 },
    { name: "Charlie", age: 35, balance: 400 },
    { name: "David", age: 40, balance: 500 }
  ];
  

 const totalAge = users.reduce((sum, el) =>    sum + user.age, 0);
 const averageAge = totalAge / users.length;
 