// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
const salaries2 = {};

function salariesSum(obj) {
  let sum = 0;
  const keyObj = Object.keys(obj);

  for (const element of keyObj) {
    sum += obj[element];
  }
  return sum;
}

console.log(salariesSum(salaries));
console.log(salariesSum(salaries2));
