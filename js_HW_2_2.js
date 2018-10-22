let user_name = prompt('Введіть імя');
if (user_name == 'Імя') {
	let user_password = prompt ('Введіть пароль');
		if(user_password == 'ЛОГОС') {
			alert('Ласкаво просимо!');
		}
		else if(user_password==null) {
			alert('Вхід скасований.');
		}
		else {
			alert('Пароль невірний.');
		}

}
else if (user_name == null) {
	alert('Вихід скасований');
}
else {
	alert('Я вас не знаю. До побачення.');
}