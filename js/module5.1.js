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