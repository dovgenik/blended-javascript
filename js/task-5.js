// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  let minNum = "Sory, it is not an array!";

  if (Array.isArray(numbers)) {
    minNum = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
      if (minNum > numbers[index]) {
        minNum = numbers[index];
      }
    }
  }
  return minNum;
}

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// const numbers = 4;
const numbers = [2, 5, 35, 56, 1, 24, 7, 80, 0];


console.log(findSmallestNumber(numbers));