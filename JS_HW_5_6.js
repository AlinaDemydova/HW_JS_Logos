// 1)	Написати функцію factorial (n), яка повертає факторіал числа n !,
// використовуючи рекурсивний виклик. 
// Підказка: зверніть увагу, що n! можна записати як n * (n-1) !. 
// Наприклад: 3! = 3 * 2! = 3 * 2 * 1! = 6

const ONE = 1;
const FOUR = 4;

function factorial(n) {
	if(n !== ONE) {
		return n*factorial(n-ONE);
	} else {
		return n;
	}
}
alert(factorial(FOUR));

// 2)	Напишіть функцію fib (n), яка повертає n-е число Фібоначчі.
/////////Варіант №1
const ONE = 1;
const NINE = 9;

function fib(n) {
  if (n !== ONE) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      a = a + b;
      b = a - b;
    }
    return a;
  } else {
    return n;
  }
}
alert(fib(NINE));

////////Варіант №2 з рекурсією
const ONE = 1;
const TWO = 2;
const SEVEN = 7;

function fib(n) {
  if (n === ONE || n === TWO) {
    return ONE;
  } else {
    return fib(n - ONE) + fib(n - TWO);
  }
}
alert(fib(SEVEN));

// 3)	Перепишіть код з використанням однієї конструкції switch:
const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;
let a = +prompt('a?', '');
switch (a) {
  case ZERO:
    alert(ZERO);
    break;
  case ONE:
    alert(ONE);
    break;
  case TWO:
  case THREE:
    alert('2,3');
    break;
  default:
    alert('no number');
}
