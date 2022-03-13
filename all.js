function greetUser(){
	alert('hello,i am pet')
}

function touchRock(){
	let userName = prompt('Как вас зовут?','введи ваше имя')

	if (userName){
		alert('добро пожаловать ' +userName+'!')
		document.getElementById('rockImg').src = 'rock1.png'
		setTimeout("document.getElementById('rockImg').src ='rock2.png';",5000);
		}
}	