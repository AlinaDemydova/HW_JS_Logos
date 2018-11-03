/*1)	Потрібно створити функцію яка буде приймати будь-який 
текстовий рядок і повертати цей же рядок, тільки в перевернутому вигляді. 
Тобто передаємо 'Привіт світ!' отримуємо '!тівс тівирП'.
*/

let str = 'Привіт, світ!';
const ONE = 1;

function endStart(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[str.length - i - ONE];
  }
  return newStr;
}
alert(endStart(str));

/* 
2)	Завдання з 5 кроків-рядків:
•	Створіть масив styles з елементами «Джаз», «Блюз».
•	Додайте в кінець значення «Рок-н-Ролл»
•	Замініть передостаннє значення з кінця на «Класика». Код заміни передостаннього значення має працювати для масивів будь-якої довжини.
•	Видаліть перше значення масиву і виведіть його alert.
•	Додайте в початок значення «Реп» і «Реггі».
*/

const ZERO = 0;
const ONE = 1;
const TWO = 2;
let style = ['Джаз', 'Блюз'];
style[TWO] = 'Рок-н-Рол';
style[style.length - TWO] = 'Класика';
delete style[ZERO];
alert(style[ZERO]);
style[ZERO] = 'Реггі';
style.unshift(ZERO);
style[ZERO] = 'Реп';
alert(style);

/*
3)	Напишіть код, який:
•	Запрошувати по черзі значення за допомогою prompt і зберігає їх в масиві.
•	Закінчує введення, як тільки відвідувач введе порожню рядок, не число або натисне «Скасування».
•	При цьому нуль 0 не повинен закінчувати введення, це дозволене число.
•	Виводить суму всіх значень масиву
*/

let array = [];
while (true) { // ту лінтер чомусь помилку видає
  let num = prompt('Enter the number');
  if (num === null || num === '' || isNaN(num)) {
    break;
  } else {
    array.push(+num);
  }
}
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
alert(sum);


/*4)	Створіть функцію find (arr, value), 
яка шукає в масиві arr значення value і повертає його номер, якщо знайдено, 
або -1, якщо не знайдено.*/

const ONE = 1;
const TWO = 2;
const THREE = 3;
let arr = [ONE, TWO, THREE];
let value = 3;

function find(arr, value) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      return i;
      break;
    } else {
      i++;
      continue;
    }
  }
  return -ONE;
}
alert(find(arr, value));

/*5)	Створіть функцію filterRange (arr, a, b), 
яка приймає масив чисел arr і повертає новий масив, 
який містить тільки числа з arr з діапазону від a до b. 
Тобто, перевірка має вигляд a ≤ arr [i] ≤ b. 
Функція не повинна змінювати arr.*/

const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
let arr = [ONE, TWO, THREE, FOUR, FIVE];
let a = TWO;
let b = FOUR;

function filterRange(arr, a, b) {
  let newArr = [];
  for (let i = a - ONE; a <= arr[i], arr[i] <= b; i++) {
    newArr.push(+arr[i]);
  }
  return newArr;
}
alert(filterRange(arr, a, b));

/*1)	Напишіть функцію ucFirst (str), 
яка повертає рядок str з заголовних першим символом.*/

const ZERO = 1;
const ONE = 1;

function ucFirst(str) {
  if (str !== '') {
    return str[ZERO].toUpperCase() + str.slice(ONE)
      .toLowerCase();
  }
}
let str = prompt('Введіть слово/речення');
alert(ucFirst(str));

/*2)	Створіть функцію truncate (str, maxlength), 
яка перевіряє довжину рядка str, і якщо вона перевершує maxlength
 - замінює кінець str на "...", 
 так щоб її довжина стала дорівнює maxlength.
 Результатом функції повинна бути (при необхідності) усічена рядок. 
*/

const ZERO = 0;
const TWENTY = 20;

function truncate(str, maxlength) {
  let strShort = str.slice(ZERO, TWENTY);
  return strShort + '...';
}
let str = 'Створіть функцію truncate (str, maxlength)';
let maxlength = 20;
alert(truncate(str, maxlength));


/*Напишіть функцію camelize (str), яка перетворює такі рядки
 «my-short-string» в «myShortString». Тобто, дефіси видаляються, 
 а всі слова після них отримують велику літеру.
P.S. Вам знадобляться методи рядків charAt, split і toUpperCase.
*/
const ONE = 1;

function camelize(str) {
  let arr = str.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      delete arr[i];
      newArr[i + ONE] = arr[i + ONE].toUpperCase();
      i++;
    } else {
      newArr[i] = arr[i];
    }
  }
  arr = newArr.join('');
  return arr;
}
let str = 'my-short-string';
alert(camelize(str));








