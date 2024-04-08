//  Вбудована функція setTimeout використовує 
// колбек - функції.
// Створіть альтернативу яка базується на промісах.
// Функція delay(ms)
// повинна повертати проміс, 
// який перейде в стан resolved через ms мілісекунд,
//   так щоб ми могли додати до нього.then:

const promise = new Promise((resolve, reject) => {
    const isSuccess = true;
    setTimeout(() => {
        if (isSuccess) {
            resolve("Done")
        } else {
            reject("Error")
        }
        
    }, 2000);
})

promise.then((info) => {
  console.log(showInfo(info)); 
})
.catch((error) => {
console.log(error);
});


function showInfo (data){
    return `Ми отримали ${data}`;
};



//  Напишіть функцію, 
// яка отримує масив чисел і повертає проміс,
// який виконується, якщо всі числа в масиві
//  є парними.Якщо ж принаймні одне число непарне,
// проміс повинен бути відхилено з повідомленням 
// "Є непарні числа".


const numbArr = [2, 4, 9, 8];
function patiryCheck(numbArr) {
    const promise = new Promise((resolve, reject) => {
       if(numbArr.every(e => e % 2 === 0))  {
        resolve("Всі числа парні")     
        } else {
            reject("Є непарні числа")
            
        }
        
    });
    return promise;
    
}

patiryCheck(numbArr).then((value => {
console.log(value);})).catch((error) => {
    console.log(error);
})


// // Напишіть функцію, яка отримує масив об'єктів  
// і повертає проміс,
// //  який виконується з масивом імен,
//  відсортованих за алфавітом.
const people = [
  { name: "John", age: 25 },
  { name: "Anna", age: 30 },
  { name: "Peter", age: 40 },
  { name: "Mary", age: 35 },
];

function getNAme(arr) {
  
    const promise = new Promise((resolve, reject) => {
        const names = arr.map(name => name.name);
        const res = names.toSorted();
  console.log(res);

   resolve(res);
    })
    return promise;
}

getNAme(people).then((data)=> {console.log(data);})