/*1)	Створіть функцію multiplyNumeric, 
яка отримує об'єкт і примножує все чисельні властивості на 2. 
Врахувати, що властивості можуть бути і не числовими.*/
var obj = {
  'eyes': 2,
  'ears': 2,
  'hands': 4,
  'name': 'MultiMen'
};

function multiplyNumeric(obj) {
  var newObj = {};
  for (let i in obj) {
    if (typeof obj[i] == 'number') {
      newObj[i] = obj[i] * 2;
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


// 4)	Напиши функцію, яка вважає число властивостей в об'єкті

let a = {
  a: 1,
  b: 8
};
let c = [1, 2, 3, 123];

function count(obj) {
  let sum = 0;
  for (let i in obj) {
    obj[i];
    sum++;
  }
  return sum;
}
let d = [];
d[100] = 1;
let b = function() {};
console.log(count(b));
console.log(count(d));
console.log(count(a));
console.log(count(c));








