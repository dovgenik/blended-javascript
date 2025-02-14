// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage() {
  let rezult = 0;
  let count = 0;

  for (const element of arguments) {
    if (typeof element === "number") {
      count++;
      rezult +=element;
    }
  }
  return count === 0 ? rezult : rezult/=count;
}

console.log(`Average - ${caclculateAverage(2,2,``,4,0)}`);
