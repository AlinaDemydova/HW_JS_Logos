

function ssArrow() {
//створюємо канвас коробку
let st = document.getElementById("myCanvas");
st.className = 'canvas';
  //малюємо круглий циферблат
  let ctx = st.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 100, 90, 0, 2 * Math.PI); //(1, 2 - координати центру; 3 - діаметр)
  ctx.stroke();

//малюємо лінію (стрілку голинника)
let stx = st.getContext("2d");
let ssArrowNow = moment().format('ss');
stx.fillStyle = 'yellow';
stx.translate(100, 100);//центр обертання стрілки
stx.rotate(6*ssArrowNow * Math.PI / 180);
stx.translate(-100, -100);
stx.moveTo(100, 100/*st.width/2, st.height/2*/);//координати початку від верхнього лівого кута
stx.lineTo(100, 20);//координати кінця лінії

//Повторення
  let timerSSId = setInterval(function() {
    stx.moveTo(100, 100);
    stx.lineTo(100, 20);
    stx.translate(100, 100);//центр обертання стрілки
    stx.rotate(6 * Math.PI / 180);
    stx.translate(-100, -100);//повертаємо центр обертання стрілки на місце
  	stx.stroke();
  }, 1000);
}

ssArrow();

//--------Електронний годинник---------

function electroWarch() {

let div = document.createElement('div');
document.body.appendChild(div);
div.className = 'wDivClass';

let timerId = setInterval(function() {
	div.innerHTML = '';
	let elWatch = moment().format('HH:mm:ss');
	let contenthhh = document.createTextNode(elWatch);
	div.appendChild(contenthhh);
	
}, 1000);
}
electroWarch();






/*function eW() {

let timerId = setInterval(function() {
    let elWatch = moment().format('HH:mm:ss');
		
	div.write(elWatch);
	
}, 1000);
};
eW();*/

/*var timerId;

function clockStart() { // запустить часы
  timerId = setInterval(update, 1000);
  update(); // (*)
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

function update() {
  var clock = document.getElementById('clock');

  var date = new Date(); // (*)

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  var minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  var seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}*/