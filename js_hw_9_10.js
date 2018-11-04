/*1)	Створіть функцію multiplyNumeric, 
яка отримує об'єкт і примножує все чисельні властивості на 2. 
Врахувати, що властивості можуть бути і не числовими.*/

let obj = {
  'eyes': 2,
  'ears': 2,
  'hands': 4,
  'name': 'MultiMen'
};
const TWO = 2;
function multiplyNumeric(obj) {
  let newObj = {};
  for (let i in obj) {
    if (typeof obj[i] === 'number') {
      newObj[i] = obj[i] * TWO;
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
}
console.log(multiplyNumeric(obj));


//Створіть функцію для глибокого копіювання об»єктів.

let obj = {
  age: 2,
  name: 'Nick',
  sister: {
    name: 'Ann',
    surname: 'Smith'
  }
};

function copy(obj) {
  let clone = {};
  for (let key in obj) {
    if (!(obj[key] instanceof Object)) {
      clone[key] = obj[key];
    } else {
      obj = key;
      copy(obj);
    }
  }
  return clone;
}
let obj2 = copy(obj);
obj2.age = 3;
obj2.sister.name = 'May';
console.log(obj);
console.log(obj2);
console.log(obj.sister);
console.log(obj2.sister);


/*3)	Створіть функцію pluck, яка бере масив об'єктів
 і повертає масив значень певного поля. 
Функція не повинна змінювати вихідний масив: */
let characters = [{
  'name': 'barney',
  'age': 36
}, {
  'name': 'fred',
  'age': 40
}];

function pluck(arr, clss) {
  let newArr = [];
  // guard-for-in
  for (let i in arr) {
    let obj = characters[i];
    for (let key in obj) {
      if (key === clss) {
        newArr.push(obj[key]);
      }
    }
  }
  return newArr;
}
console.log(pluck(characters, 'name')); // 'barney', 'fred'

// 4)	Напиши функцію, яка вважає число властивостей в об'єкті

const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
const HUNDRED = 100;
let a = {
  a: ONE,
  b: TWO
};
let c = [ONE, TWO, THREE];

function count(obj) {
  let sum = ZERO;
  for (let i in obj) { //guard=for=in
    obj[i];
    sum++;
  }
  return sum;
}

let d = [];
d[HUNDRED] = ONE;
let b = function() {}; // no-empty=function
console.log(count(b));
console.log(count(d));
console.log(count(a));
console.log(count(c));








