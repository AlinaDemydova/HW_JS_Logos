

let btn = document.querySelector('button');

btn.onclick = closeAlert;

function closeAlert() {
	document.querySelector('button').parentNode.style.display = 'none';
}

