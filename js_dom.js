/// ---------------#1---------------------
/*
let tablelength = document.getElementsByTagName('tr')[0].children.length;

for (let i = o; i < tablelength; i++) {
	let elem = document.getElementsByTagName('tr')[i];
	let elemTd = elem.getElementsByTagName('td')[i];
	elemTd.style.background='red';
}*/

/*-------------------------------------------

<h1 id="main-heading">Привет, мир!</h1>
var headingElement = document.getElementById("main-heading");

headingElement.innerHTML; // через свойство
innerHTML мы можем узнать, что за текст находится внутри
элемента, или заменить этот текст. Эта команда возвращает содержимое headingElement —
элемента, который мы нашли с помощью getElementById.
В данном случае содержимое — это текст "Привет, мир!"

var headingElement = document.getElementById("main-heading"); //с помощью document.getElementById
//нашли элемент h1 (id которого равен «main-heading»)
//и сохранили его в переменной headingElement

console.log(headingElement.innerHTML); // вывели в консоль строку, возвращенную вызовом
//headingElement.innerHTML — то есть "Привет, мир!"

var newHeadingText = prompt("Введите новый заголовок:"); // открыли диалог prompt, чтобы получить
// от пользователя новый заголовок, и сохранили введенный пользователем текст в переменной newHeadingText

headingElement.innerHTML = newHeadingText; // присвоили сохраненное в newHeadingText значение свойству
// innerHTML элемента headingElement

*/
/*
let div = document.getElementById('list');
let ul = document.createElement('ul');
let li = document.createElement('li');

div.appendChild(ul);  
ul.appendChild(li);

li.innerHTML = "Эта строка списка создана в JS";
li.innerHTML = "Эта должна была быть вторая строка созданая в JS";
*/
/*
var div = document.getElementById('list');
var ul = document.createElement('ul');
div.appendChild(ul);
var data = ["Первая строка", "Вторая строка", "n строка"];
for (var i = 0, ln = data.length; i < ln; i++) {

  var li = document.createElement('li');

  li.innerHTML = data[i];

  ul.appendChild(li);

}
*/

/*(function() {
	let elem = document.createElement('p'),
		content = document.createTextNode("Это контент"),
		table = document.getElementById('myTable');

		elem.innerHTML = '<strong>Этто контент</strong>';

		//table.parentNode.removeChild(elem);// удаление элемента
		//table.parentNode.removeChild(table);
		elem.appendChild(content);
		//elem.setAttribute('id', 'myPage');// присвоение аттрибута
		elem.id = 'myPagege';// 2-й способ создания аттрибута

		//table.parentNode.appendChild(elem);//прикрепляем к родительскому эелементу
		table.parentNode.insertBefore(elem, table); // 1-е значение - тот элемент, который вставляем, 2-е - тот, перед которым вставляем
		//table.parentNode.replaceChild(elem, table);// поменять местами

//let div = document.getElementById('list');
let ul = document.createElement('ul');
ul.id = 'myList';
table.parentNode.appendChild(ul, table);

let li = document.createElement('li'),
li.innerHTML = '<strong>Это список 1</strong>';
ul.appendChild(li);


})();*/

(function() {

let ul=document.createElement("ul");
ul.id = 'ulOne';
document.body.appendChild(ul);

let data = ["one", "two", "three", 'four', 'five'];

for (let i = 0, ln = data.length; i < ln; i++) {
	let li=document.createElement("li");
	li.innerHTML= data[i];
	ul.appendChild(li);
}

let ul2=document.createElement("ul");
ul.appendChild(ul2);

let data2 = ["one", "two", "three"];

for (let i = 0, ln = data2.length; i < ln; i++) {
	let li=document.createElement("li");
	li.innerHTML= data[i];
	ul2.appendChild(li);
}

let listLength = document.getElementsByTagName('li').length;

let elem = document.createElement('p'), // созд. элемент
	content = document.createTextNode("Кількість пунктів li - " + listLength );//созд. текстов.контент
elem.appendChild(content);//прикрепл. содержимое к элементу

let startP = document.getElementById('start');//ищем к какому элементу прикрепить
startP.parentNode.appendChild(elem);//прикрепляем наш элемент к родителю того, чью Id указали



let parag = document.createElement('p'),
	printContent = document.createTextNode('Вивід вмісту li');
parag.appendChild(printContent);
startP.parentNode.appendChild(parag);



for( let i = 0, ln = data.length /*+ data2.length*/; i < ln; i++ ) {
	parag.innerHTML = document.getElementsByTagName('ul')[0].getElementsByTagName('LI')[i].innerHTML
}
//document.getElementsByTagName('LI')[1]
//document.getElementsByTagName('DIV')[0].getElementsByTagName('LI')

//document.getElementsByTagName('ul')[0].getElementsByTagName('LI')[0].innerHTML// выводит содержимое элемента
//document.getElementsByTagName('ul').getElementsByTagName('LI').innerHTML// выводит все li

})();






