let firstPhoto = document.getElementById('firstPhoto');
firstPhoto.style.backgroundImage = "url('img/sprite-gorisontal.png')";
firstPhoto.style.backgroundPosition = '0px';
let secondPhoto = document.getElementById('secondPhoto');
secondPhoto.style.backgroundImage = "url('img/sprite-gorisontal.png')";
secondPhoto.style.backgroundPosition = '-300px';
let thirdPhoto = document.getElementById('thirdPhoto');
thirdPhoto.style.backgroundImage = "url('img/sprite-gorisontal.png')";
thirdPhoto.style.backgroundPosition = '-600px';

let buttonRight = document.getElementById('buttonRight');
buttonRight.onclick = moveRight;

let stepMove = 300;

function moveRight() {
  firstPhoto.style.backgroundPosition = (parseInt(firstPhoto.style.backgroundPosition) -
    stepMove) + 'px';
  secondPhoto.style.backgroundPosition = (parseInt(secondPhoto.style.backgroundPosition) -
    stepMove) + 'px';
  thirdPhoto.style.backgroundPosition = (parseInt(thirdPhoto.style.backgroundPosition) -
    stepMove) + 'px';
}

let buttonLeft = document.getElementById('buttonLeft');
buttonLeft.onclick = moveLeft;

function moveLeft() {
  firstPhoto.style.backgroundPosition = (parseInt(firstPhoto.style.backgroundPosition) +
    stepMove) + 'px';
  secondPhoto.style.backgroundPosition = (parseInt(secondPhoto.style.backgroundPosition) +
    stepMove) + 'px';
  thirdPhoto.style.backgroundPosition = (parseInt(thirdPhoto.style.backgroundPosition) +
    stepMove) + 'px';
}