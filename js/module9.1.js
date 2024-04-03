// Створіть функцію, яка буде додавати об'єкт в localStorage.
//  Назва об'єкту має бути ключем, а сам об'єкт - значенням.

const userInfo = {
    userName: "Liza",
    userPassword: "123lft",
}

function addToLocalStorage(userInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

addToLocalStorage(userInfo);


// Створіть функцію, яка буде отримувати об'єкт з localStorage.
//  Назва об'єкту має бути ключем, а сам об'єкт - значенням.

function dataLocalStorage() {
    const userData = localStorage.getItem("userInfo");
    const parsedDate = JSON.parse(userData);
    return parsedDate;
}
console.log(dataLocalStorage());

// Створіть функцію, 
// яка буде видаляти значення з localStorage за ключем.

// function removeData(key) {
//    return localStorage.removeItem(key);
// }
// removeData("userInfo")

const students = {
    course: "JS",
    duration: 6
}

function addKeyToLocalStorage( obj) {
     localStorage.setItem("studentInfo", JSON.stringify(obj))
}

addKeyToLocalStorage(students)


// Створіть функцію, 
// яка буде видаляти всі значення з localStorage.

// function clearAllToLocalStorage() {
//     localStorage.clear()
// }
// clearAllToLocalStorage();


// Створіть функцію, 
// яка буде повертати кількість елементів в localStorage


const student = {
    studentName: "Mary",
    block: "Node",
    duration: 7
};

localStorage.setItem("StudentSecond", JSON.stringify(student));
console.log(localStorage);

function lengthLocalStorage() {
    return localStorage.length
};
console.log(lengthLocalStorage());

// Створіть функцію,
//  яка буде повертати масив ключів з localStorage

function getArrayKeys() {
    return Object.keys(localStorage);
}
console.log(getArrayKeys());


// Створіть функцію, яка буде перевіряти, 
// чи існує об'єкт в localStorage за ключем.

const checkKey = () => {
    const key = localStorage.getItem("studentName")
    if (checkKey === null) {
        return `Such key does not exist`
    } 
        return checkKey;
}

console.log(checkKey());