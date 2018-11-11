

let btn = document.querySelector('button');

btn.onclick = closeAlert;

/*for (let i = 0; i<2; i++) {
let btn = document.querySelectorAll('button')[i];
}
*/
function closeAlert() {
	/*for (let i = 0; i<2; i++) {
document.querySelectorAll('button')[i].parentNode.style.display = 'none';
}*/
	document.querySelector('button').parentNode.style.display = 'none';
	
	//document.querySelector('div > div > button').style.display = 'none';
	//document.getElementById('1button').style.display = 'none';
}

