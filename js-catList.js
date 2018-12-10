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
	ul.id = 'ulId';
	buttonPlus.onclick = newLine;

	function newLine() {
		if (textarea.value !== '') {
			let listLength = document.getElementsByTagName('li').length;
			if (listLength < 10) {
				let li = document.createElement('li');
				ul.appendChild(li);
				li.className = 'liClass';
				li.draggable = 'true';
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
			} else {
				more10.style = +'visibility: visible';
				textarea.value = '';
			}
		} else {
			textarea.value = 'Add new action';
			buttonPlus.disabled = true;
		}
	}
}
addNewList();
let cols = document.querySelectorAll('#ulId .liClass');
let dragSrcEl;

function handleDragStart(e) {
	this.style.opacity = '0.4';
	dragSrcEl = this;
	e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
	this.classList.add('over');
}

function handleDragLeave(e) {
	this.classList.remove('over');
}

function handleDrop(e) {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (dragSrcEl !== this) {
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
		this.parentNode.insertBefore(dragSrcEl, this);
	}
	return false;
}

function handleDragEnd(e) {
	[].forEach.call(cols, function(col) {
		col.classList.remove('over');
		col.classList.remove('dragOpacity');
	});
}

function initEvents() {
	[].forEach.call(cols, function(col) {
		col.addEventListener('dragstart', handleDragStart, false);
		col.addEventListener('dragenter', handleDragEnter, false);
		col.addEventListener('dragover', handleDragOver, false);
		col.addEventListener('dragleave', handleDragLeave, false);
		col.addEventListener('drop', handleDrop, false);
		col.addEventListener('dragend', handleDragEnd, false);
	});
}
initEvents();
