
var students = []
function addStudent() {
    const formData = {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        pursuing: "",
        cpi: 0,
        experience: 0,
        website: "",
        language: []
    };
    for (a in formData) {
        if (a !== "pursuing" && a !== "language") {
            formData[a] = document.getElementById(a).value
        } else if (a === "pursuing") {
            var allRadioBtns = document.querySelectorAll('input[type="radio"]');
            for (i = 0; i < allRadioBtns.length; i++) {
                if (allRadioBtns[i].checked === true) {
                    formData[a] = allRadioBtns[i].value
                }
            }
        } else if (a === "language") {
            var allCheckBoxs = document.querySelectorAll('input[type="checkbox"]');
            for (i = 0; i < allCheckBoxs.length; i++) {
                if (allCheckBoxs[i].checked === true) {
                    formData[a].push(allCheckBoxs[i].value)
                }
            }

        }
    }

    students.push(formData)

    displayUsers()
    clearuser()
    deleteuser()
}

function displayUsers() {
    document.querySelector("tbody").innerHTML = "";
    students.map((userobj) => {
        var mytr = document.createElement("tr")
        for (a in userobj) {
            var mytd = document.createElement("td")
            mytd.innerHTML = userobj[a]
            mytr.appendChild(mytd)
        }

        var edittd = document.createElement("td")
        var deletetd = document.createElement("td")

        var editbtn = document.createElement("button")
        var deletebtn = document.createElement("button")

        edittd.appendChild(editbtn)
        deletetd.appendChild(deletebtn)

        editbtn.innerHTML = "edit user"
        deletebtn.innerHTML = "delete user"
        // deletebtn.setAttribute('onclick','deleteuser('++'')

        mytr.appendChild(edittd)
        mytr.appendChild(deletetd)
        document.querySelector("tbody").appendChild(mytr)
    })
}

 function clearuser(){
    document.getElementById("university").value=""
    document.getElementById("institute").value=""
    document.getElementById("branch").value=""
    document.getElementById("degree").value=""
   

    
 }


 function deleteuser(){
   
    
   
    
 }

