// Створіть клас Rectangle, що містить властивості width та height. 
// Додайте метод getArea(), який повертає площу прямокутника.
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

class Rectangle {
    constructor(width, height)
  {
     this.width = width;
     this.height = height;
  }
  getArea () {
   return this.width * this.height
  }
 }

 const rectangle1 = new Rectangle(10, 5);
 console.log(rectangle1.getArea()); // 50



// Створіть клас Person, що містить властивості firstName та lastName. 
// Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe


class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    }

    const person1 = new Person('John', 'Doe');
    console.log(person1.getFullName()); // John Doe


    // Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). 
    // Кожен метод приймає два аргументи - числа, які необхідно обробити. 
    // Результатом кожного методу має бути результат відповідної математичної операції.

 
// class Calculator {

// add (num1, num2) {
// return num1 + num2;
// }
// subtract(num1, num2) {
// return num1 - num2;
// }
//  multiply(num1, num2) {
// return num1 * num2;
//  }
//   divide(num1, num2) {
//     if (num2 === 0) {
//         return  "На нуль ділити не можна"  
//     }
//     return num1 / num2;
//   }
// }
  
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна


class Calculator {

    add () {
        return Array.from(arguments).reduce((total, num) => {
             total += num;
             return total;
        }, 0)

    }
    subtract(num1, num2) {
    return num1 - num2;
    }
     multiply(...args) {
    return args.reduce((total, num) => {
        total *= arg;
        return total;
    }, 1)
     }
      divide(num1, num2) {
        if (num2 === 0) {
            return  "На нуль ділити не можна"  
        }
        return num1 / num2;
      }
    }

    const calculator = new Calculator();
console.log(calculator.add(5, 6, 7, 10, 57));


    // console.log(calculator.add(2, 3)); // 5
    // console.log(calculator.subtract(5, 2)); // 3
    // console.log(calculator.multiply(2, 4)); // 8
    // console.log(calculator.divide(10, 2)); // 5
    // console.log(calculator.divide(10, 0)); // На нуль ділити не можна


// Створіть клас Shape, який має властивість color і метод draw. 
// Створіть клас Circle, який наслідується від Shape і має властивість
//  radius та перезаписує метод draw для відображення кола.
// Створіть об'єкт myCircle класу Circle з радіусом 5 і коліром "red".


class Shape {
constructor(color, radius) {
    this.color = color;
    this.radius = radius;
}

draw () {
    return `Drawing a circle with radius 5`;
}
}

class Circle extends Shape {
    constructor (color, radius) {
        super (color, radius);
    }
}

const myCircle = new Circle('red', 5);
myCircle.draw(); // Drawing a circle with radius 5
console.log(myCircle.color); // "red"


// Створіть клас Animal, який має властивість name. 
// Створіть клас Dog, який наслідується від Animal і має властивість breed. 
// Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.


// class Animal {
//    constructor(name) {
//     this.name = name;
//    }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
// }

// const myDog = new Dog('Buddy', 'Labrador Retriever');
// console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }


// Нехай є базовий клас Animal з методом makeSound().
//  Створіть підклас Cat, який буде наслідувати Animal та перевизначати
//   метод makeSound().



class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("The animal make a sound");
    }

}

class Cat extends Animal {
    constructor(name)  {
        super(name);
    }
}

const animal = new Animal();
animal.makeSound(); // "The animal makes a sound"

const cat = new Cat();
cat.makeSound(); // "Meow"

// Створіть клас Product, що містить властивості name, price, та discount. 
// Додайте метод getDiscountPrice(), який повертає ціну товару зі знижкою, якщо така є
//  (якщо властивість discount є ненульовим числом,
//      знижка відсотків від ціни повинна бути застосована).

class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    getDiscountPrice() {
       let totalPrice = 0;
       totalPrice = this.price - ((this.price * this.discount)/100);
       if (this.discount > 0) {
        return totalPrice
       }
    }
}



const product1 = new Product('Phone', 500, 10);
console.log(product1.getDiscountPrice()); // 450