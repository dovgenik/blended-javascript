// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain"));
// 'capital'

function findLongestWord(string) {
  const arrayString = string.split(" ");
  let maxLen = arrayString[0].length;
  let indexMax= 0;

  for (let index = 1; index < arrayString.length; index++) {
    if (maxLen < arrayString[index].length) {
      maxLen = arrayString[index].length;
      indexMax= index;
    }
  }
  return arrayString[indexMax];
}

console.log(findLongestWord("London is the capital of Great Britain"));
