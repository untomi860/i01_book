let students = []
loadFromSite()

function loadFromSite(){
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function(){
        students = JSON.parse(this.responseText)['response']
    }
    xhttp.open('GET',"http://217.71.129.139:4035/students.php",true)
    xhttp.send()
}

function loadStudents(){
    let table = document.getElementById('tbl_all')
    for (let i = 0; i < students.length; i++){

        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('button')
        let td5 = document.createElement('button')
        

        td1.textContent = students[i].id
        td2.textContent = students[i].name
        td3.textContent = students[i].surname
        td4.innerHTML = "Удалить";
        
        td4.onclick = function(){
            delete students[i]
            td1.remove()
            td2.remove()
            td3.remove()
            td4.remove()
        
        }
        

        td5.innerHTML = "Подробно";
        td5.onclick = function(){
            
            let div = document.getElementById('text')
           
            let header = document.createElement('h1')
            
            header.textContent = `Информация о студенте №${students[i].id}`
            
            let body = document.createElement('h3')
            
            body.textContent = `${students[i].name} ${students[i].surname}`
            
            let img = document.createElement('img')
            
            img.src = `http://217.71.129.139:4035/${students[i].logo}`

            div.innerHTML = ""
            div.appendChild(header)
            div.appendChild(body)
            div.appendChild(img)
        }
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        
        table.appendChild(tr)

       
        document.getElementById('btn').disabled = true
   
    console.log(`${students[i].id} ${students[i].name} ${students[i].surname}`)
    }
}

