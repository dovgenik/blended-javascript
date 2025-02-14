// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
read(a, b) {
    this[a]=0;
    this[b]=0;
},
read2(a, b) {
    this[a]=b;
},
exist(name) {
    return Object.keys(this).includes(name);
},
sum(a, b){
return this.exist(a) && this.exist(a) ? this[a]+this[b] : `No such propeties`;
},

mult(a, b){
    return this.exist(a) && this.exist(a) ? this[a]*this[b] : `No such propeties`;
},


}

calculator.read(`aaa`, `bbbb`);
calculator.read2(`aaa2`, 7);
calculator.read2(`aaa3`, 5);

console.log(calculator);
console.log(``);
console.log(calculator.sum(`aaa`,`aaa2`));
console.log(calculator.sum(`aaa2`,`aaa3`));
console.log(calculator.sum(`aaa`,`bbbb`));
console.log(``);
console.log(calculator.mult(`aaa`,`aaa2`));
console.log(calculator.mult(`aaa2`,`aaa3`));
console.log(calculator.mult(`aaa`,`bbbb`));
console.log(calculator.mult(`a`,`bbbb`));


