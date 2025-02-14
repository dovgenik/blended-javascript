// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

function objEdit(obj) {
  obj.mood = "happy";
  obj.hobby = "skydiving";
  obj.premium = false;

  const keyObj = Object.keys(obj);
  
  for (const element of keyObj) {
    console.log(`${element}:${obj[element]}`);
  }
}

objEdit(user);
