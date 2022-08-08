const userContainers=document.getElementById('users')
const API_URL='https://api.sampleapis.com/cartoons/cartoons2D'

const renderUsers=(cartoons)=>{
    let result=''
    cartoons.forEach(element => {
        result+=`
        <table >
            <tr>
                <td class="filterDiv title">${element.title}</td>
                <td class="filterDiv ${element.year}"> ${element.year}</td>
                <td class="filterDiv genre">${element.genre}</td>
                <td><img src="${element.image}" width="200" height="150"></td>
            </tr>
        </table>
        `
    });
    userContainers.innerHTML=result
    localStorage.setItem('API_Data',JSON.stringify(cartoons))
}

const fetchData = ()=>{
    const data = localStorage.getItem('API_Data')
    const newData=JSON.parse(data)
    if(!!newData){
        renderUsers(newData)
    } else{
        fetch(`${API_URL}`)
        .then ((response)=>{
            return response.json()
        })
        .then ((cartoons)=>{
            renderUsers(cartoons)
        })
        .catch ((error)=>{
            alert('Error',error)
        })
    }
}
fetchData()


function myFunction() { 
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("users");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}



function filterTable() {
    
    let dropdown, table, rows,  year, cells, filter;
    dropdown = document.getElementById("yearsDropdown");
    table = document.getElementById("users");
    rows = table.getElementsByTagName("tr");
    filter = dropdown.value;
  
    for (let row of rows) { 
      cells = row.getElementsByTagName("td");
      year = cells[2] || null; 
      if (filter === "All" || !year || filter === year.textContent) {
        row.style.display = ""; 
      }
      else {
        row.style.display = "none";   
      }
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("users");
    switching = true;
    dir = "asc"; 
    while (switching) {
      
      switching = false;
      rows = table.rows;
      for (i = 0; i < (rows.length - 1); i++) {
        
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  console.log(2 ** 3 ** 2)
  for (var i = 10; i <35; i += 5) {

    console.log (i);
    
    }