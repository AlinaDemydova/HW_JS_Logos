//======================#1==============================

function tableCreate() {
  var body = document.body,
    tbl = document.createElement('table');
  tbl.style.width = '200px';
  tbl.style.border = '1px solid black';
  for (var i = 1; i < 6; i++) { //стобцы
    var tr = tbl.insertRow();
    for (var j = 1; j < 6; j++) {
      var td = tr.insertCell();
      td.appendChild(document.createTextNode(j + ':' + i));
      td.style.border = '1px solid black';
    }
  }
  body.appendChild(tbl);
}
tableCreate();
let tablelength = document.getElementsByTagName('tr')[0].children.length;
for (let i = 0; i < tablelength; i++) {
  let elem = document.getElementsByTagName('tr')[i];
  let elemTd = elem.getElementsByTagName('td')[i];
  elemTd.style.background = 'red';
}

//=======================#2============================

(function() {
  let ul = document.createElement("ul");
  ul.id = 'ulOne';
  document.body.appendChild(ul);
  let data = ["one", "two", "three", 'four', 'five'];
  for (let i = 0, ln = data.length; i < ln; i++) {
    let li = document.createElement("li");
    li.innerHTML = data[i];
    ul.appendChild(li);
  }
  let ul2 = document.createElement("ul");
  ul.appendChild(ul2);
  let data2 = ["one", "two", "three"];
  for (let i = 0, ln = data2.length; i < ln; i++) {
    let li = document.createElement("li");
    li.innerHTML = data[i];
    ul2.appendChild(li);
  }
  let listLength = document.getElementsByTagName('li')
    .length;
  let elem = document.createElement('p'), // созд. элемент
    content = document.createTextNode("Кількість пунктів li - " + listLength); //созд. текстов.контент
  elem.appendChild(content); //прикрепл. содержимое к элементу
  let startP = document.getElementById('start'); //ищем к какому элементу прикрепить
  startP.parentNode.appendChild(elem); //прикрепляем наш элемент к родителю того, чью Id указали
  var elementsLi = document.querySelectorAll('ul > li:last-child');
  for (var i = 0; i < elementsLi.length; i++) {
    elementsLi[i].innerHTML;
    startP.appendChild(elementsLi);
  }
})();
