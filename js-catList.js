
function addNewList() {

let header = document.getElementById('header');

let textarea = document.getElementById('text');
textarea.onclick = newText;

let buttonPlus = document.getElementById('buttonPlus');
buttonPlus.disabled = true;

let more10 = document.getElementById('of10');
more10.style = 'visibility: hidden';

function newText() {
	textarea.value = '';
	buttonPlus.disabled = false;
}

let ul = document.createElement('ul');
header.parentNode.appendChild(ul);

buttonPlus.onclick = newLine;

function newLine() {
	if( textarea.value !== '') {
		let listLength = document.getElementsByTagName('li').length;
			if (listLength < 10) {
				let li = document.createElement('li');
				ul.appendChild(li);

				let inputLi = document.createElement('input');
				inputLi.type = 'checkbox';
				inputLi.className = 'checkboxLi';
				li.appendChild(inputLi);

				let textLi = document.createTextNode(textarea.value);
				li.appendChild(textLi);

				let buttonDelete = document.createElement('button');
				li.appendChild(buttonDelete);
				buttonDelete.className = 'buttonDeleteClass';
				
				textarea.value = 'Add new action';
				buttonPlus.disabled = true;

					buttonDelete.onclick = deleteLi;

						function deleteLi() {
							buttonDelete.parentNode.remove();
							more10.style = 'visibility: hidden';
						}
			}
			else {
				more10.style = +'visibility: visible';
				textarea.value = '';
			}
		}
		else {
			textarea.value = 'Add new action';
			buttonPlus.disabled = true;
		}
	}
}

addNewList();
