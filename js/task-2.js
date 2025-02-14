// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// let inputName= prompt("Input ...");

function checkLogin(arrayOfLogin) {
let findResult= "User not found";
let inputName= prompt("Введіт ваш Login, будь ласка ");
    if (arrayOfLogin.includes(inputName)) {
        alert(`Welcome, ${inputName}!`);
    }
    
}

const logins = ["Peter", "John", "Igor", "Sasha"];
console.log(logins);
checkLogin(logins);