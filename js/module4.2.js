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


const user = {
    nameUser: "Liza",
    email: "Liza@gmail",
    password: "liza9374",
    login () {
        if this.email !== prompt("Enter your email") && this.password !== prompt("password")
        {
            return "wrong e-mail and password"
        }
    }
}