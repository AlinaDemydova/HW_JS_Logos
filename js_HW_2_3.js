let season = prompt('Введіть число від 1 до 12.');
	if(season==1 || season==2 || season==12) alert('Winter');
	else if(season>2 && season<6) alert('Spring');
	else if(season>5 && season<9) alert('Summer');
	else if(season>8 && season<12) alert('Autumn');
	else alert('There is only 12 month.');