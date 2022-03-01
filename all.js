let students = []
loadFromSite()

function loadFromSite(){
	$.get('http://217.71.129.139:4035/students.php',function(data){
		students = JSON.parse(data)['response'];

	});
  }

function loadStudents(){
    let table = $('#tbl_all')
    for (let i = 0; i < students.length; i++){

        let tr = $('<tr>')

        let td1 = $('<td>' + students[i].id + '</td>')
        let td2 = $('<td>' + students[i].name + '</td>')
        let td3 = $('<td>' + students[i].surname + '</td>')
        let td4 = $('<td><button onclick = "show_info ('+i+')">Подробно</button></td>')
        
        tr.append(td1).append(td2).append(td3).append(td4)

        table.append(tr)

       }

        $('#btn').disabled = true

    }

    function show_info(id){
    	let div = $('#info')

    	let header = $('<h1>Информация о студенте №'+id+'</h1>')

    	let name = $('<h3>'+students[id].name+''+students[id].surname+'</h3>')

    	let img = $('<img src="http://217.71.129.139:4035/' + students[id].logo+'">')

    	div.html('')

    	div.append(header).append(name).append(img)
    }


       //td1.textContent = students[i].id
       // td2.textContent = students[i].name
        //td3.textContent = students[i].surname
        //td4.innerHTML = "Удалить";
        
       // td4.onclick = function(){
         //   delete students[i]
          //  td1.remove()
           // td2.remove()
          //  td3.remove()
          //  td4.remove()
        
       // }
        

       // td5.innerHTML = "Подробно";
     // td5.onclick = function(){
            
          //let div = document.getElementById('text')
           
          //et header = document.createElement('h1')
            
         // //    
         //let body = document.createElement('h3')
            
       // body.textContent = `${students[i].name} ${students[i].surname}`
            
         // let img = document.createElement('img')
            
        // img.src = `http://217.71.129.139:4035/${students[i].logo}`

      // div.innerHTML = ""
        // div.appendChild(header)
       //  div.appendChild(body)
        // div.appendChild(img)
     // }
     //tr.appendChild(td1)
     // tr.appendChild(td2)
     // tr.appendChild(td3)
   // tr.appendChild(td4)
    // tr.appendChild(td5)
        
     //   table.appendChild(tr)

       
       // document.getElementById('btn').disabled = true
   
   // console.log(`${students[i].id} ${students[i].name} ${students[i].surname}`)
   // }
//