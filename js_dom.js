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
