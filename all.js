let students = []
loadFromSite()

function loadFromSite(){
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		students = JSON.parse(this.responseText)['response']
	}
	xhttp.open("get","http://217.71.129.139:4035/students.php", true);
	xhttp.send();
}

function loadStudents(){
	let table = document.getElementById('tbl_all')

	for(let i = 0; i < students.length; i++) {

		let tr = document.createElement('tr')

		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')


		td1.textContent = students[i].id
		td2.textContent = students[i].name
		td3.textContent = students[i].surname

		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)

		table.appendChild(tr)
	}
	document.getElementById('btn').disabled = true
}