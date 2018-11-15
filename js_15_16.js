//Створюємо головний контейнер
let divAll = document.createElement('div');
document.body.appendChild(divAll);
divAll.style = 'width: 1000px; \
height: 1000px; \
background: lightgreen;';
//Створюємо заголовок
let h1 = document.createElement('h1');
let contenthhh = document.createTextNode('Натисніть на кнопку');
h1.appendChild(contenthhh);
divAll.appendChild(h1);
//Створюємо кнопку
let button = document.createElement('button');
let txtButton = document.createTextNode('Натисніть для показу форми');
button.appendChild(txtButton);
divAll.appendChild(button);
button.onclick = showPrompt;

function showPrompt() {
  divAll.style =
    'width: 1000px; \
	height: 1000px; \
	background: rgba(112, 112, 112, 0.5); \
	position: relative; \
	z-index: 1;';
  button.disabled = true;
  //Алерт
  let msg = document.createElement('div');
  document.body.appendChild(msg);
  //Картинка
  let imgDiv = document.createElement('div');
  msg.appendChild(imgDiv);
  imgDiv.style =
    'float:left; \
		width:100px; \
		height:100px; \
		background: url(img/2_13.png) no-repeat; \
		background-size: contain;';
  //Текст
  let txtMsg = document.createElement('p');
  msg.appendChild(txtMsg);
  let textMsgContent = document.createTextNode('Введіть текст');
  txtMsg.appendChild(textMsgContent);
  //Поле для вводу
  let textarea = document.createElement('textarea');
  msg.appendChild(textarea);
  let br = document.createElement('br');
  msg.appendChild(br);
  textarea.type = 'text';
  //Фокус на поле для вводу при завантаженні вікна
  textarea.focus();
  //Кнопка ОК
  let buttonOk = document.createElement('button');
  let txtOkButton = document.createTextNode('Ok');
  buttonOk.appendChild(txtOkButton);
  textarea.parentNode.appendChild(buttonOk);
  //Кнопка Скасувати
  let buttonEsc = document.createElement('button');
  let txtEscButton = document.createTextNode('Скасувати');
  buttonEsc.appendChild(txtEscButton);
  textarea.parentNode.appendChild(buttonEsc);
  msg.style =
    'z-index: 3; \
			margin: auto; \
			background-color: honeydew; \
			border: 2px solid black; \
			width: 300px; \
			height: 200px; \
			position: fixed; \
			top: 50px; \
			left: 350px;';
  buttonOk.onclick = alertMsg;

  function alertMsg() {
    if (textarea.value !== '') {
      alert('Ви ввели:\n' + textarea.value);
    }
  }
  buttonEsc.onclick = escp;

  function escp() {
    msg.style = 'display: none';
    divAll.style = '';
    button.disabled = false;
  }
}