

let btn = document.querySelector('button');

btn.onclick = closeAlert;

function closeAlert() {
	
	document.querySelector('button').parentNode.style.display = 'none';
	//document.querySelector('div > div > button').style.display = 'none';
	//document.getElementById('1button').style.display = 'none';
}

