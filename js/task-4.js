// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


function addAdjacentNumbers(array) {
    let sumArray=[];
    for (let index = 1; index < array.length; index++) {
        sumArray.push(array[index-1]+array[index]) ;   
    }
   return sumArray; 
}

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

console.log(addAdjacentNumbers(someArr));