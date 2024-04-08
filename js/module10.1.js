// setTimeout(() => {
//     console.log("Hello");
// }, 1000)

// for(let i = 0; i < 10000; i++){
//     console.log("Bye");
// }


// Створіть лічильник. який збільшується на одиницю кожну сек,
// виводьте значення лічильника на сторінці

const span = document.querySelector('.span');

let counter = 0;
const timer = setInterval(() => {
counter += 1
    span.textContent = `${counter}`;
}, 1000);

// створіть блок, яктй змінює свій колір кожні 3 секунди\

const block = document.createElement('div');
block.textContent = "Hello, i`m change my color"
document.body.append(block);

const interval = setInterval(() => {
    block.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
}, 3000);

