let inputField = document.getElementById("input")
let displayField = document.getElementById("container")
let reset = document.getElementById("resetall")
let save=document.getElementById("submit")
let inputedit=document.getElementById("inputedit")
let changeButton=document.getElementById("change")

inputField.addEventListener("keydown",function(event){
    if(event.key==='Enter'){
        let listItem = document.createElement("li")
        listItem.style.textAlign = "center"

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.addEventListener("change", toggleStrikethrough)

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.id = "del_btn"
        deleteButton.addEventListener("click", removeItem)


        let editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.id = "edit_button"


        listItem.innerHTML = inputField.value + "&nbsp;&nbsp;&nbsp;"
        listItem.appendChild(checkbox)
        listItem.appendChild(deleteButton)
        listItem.appendChild(editButton)

        listItem.style.textAlign = "center"

        editButton.addEventListener("click", function(event){
            inputedit.style.visibility="visible"
            changeButton.style.visibility="visible"

            changeButton.addEventListener("click",function(event){
               
                    listItem.innerHTML = inputedit.value + "&nbsp;&nbsp;&nbsp;"
                    listItem.appendChild(checkbox)
                    listItem.appendChild(deleteButton)
                    listItem.appendChild(editButton)
                    inputedit.style.visibility="hidden"
                    changeButton.style.visibility="hidden"
                
            })
            inputedit.addEventListener("keydown",function(event){
                if(event.key==="Enter"){
                    listItem.innerHTML = inputedit.value + "&nbsp;&nbsp;&nbsp;"
                    listItem.appendChild(checkbox)
                    listItem.appendChild(deleteButton)
                    listItem.appendChild(editButton)
                    inputedit.style.visibility="hidden"
                }
            })

        })

        displayField.append(listItem)
        inputField.value = ""
    }
})

function submit() {
    try {

        let listItem = document.createElement("li")
        listItem.style.textAlign = "center"

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.addEventListener("change", toggleStrikethrough)

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.id = "del_btn"
        deleteButton.addEventListener("click", removeItem)

        let editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.id = "edit_button"
        

        listItem.innerHTML = inputField.value + "&nbsp;&nbsp;&nbsp;"
        listItem.appendChild(checkbox)
        listItem.appendChild(deleteButton)
        listItem.appendChild(editButton)

        listItem.style.textAlign = "center"


        editButton.addEventListener("click", function(event){
            inputedit.style.visibility="visible"
            changeButton.style.visibility="visible"

            changeButton.addEventListener("click",function(event){
               
                    listItem.innerHTML = inputedit.value + "&nbsp;&nbsp;&nbsp;"
                    listItem.appendChild(checkbox)
                    listItem.appendChild(deleteButton)
                    listItem.appendChild(editButton)
                    inputedit.style.visibility="hidden"
                    changeButton.style.visibility="hidden"
                
            })

            inputedit.addEventListener("keydown",function(event){
                if(event.key==="Enter"){
                    listItem.innerHTML = inputedit.value + "&nbsp;&nbsp;&nbsp;"
                    listItem.appendChild(checkbox)
                    listItem.appendChild(deleteButton)
                    listItem.appendChild(editButton)
                    inputedit.style.visibility="hidden"
                    changeButton.style.visibility="hidden"
                }
            })

        })

        displayField.append(listItem)
        inputField.value = ""

    } catch (error) {
        alert("Elements not found!")
    }
}
function removeItem(event) {
    event.target.parentElement.remove()
}

function toggleStrikethrough(event) {
    const listItem = event.target.parentElement
    listItem.style.textDecoration = event.target.checked ? "line-through" : "none"
}

function resetList() {
    displayField.innerHTML = "";
    inputField.value = ""
}

// Attach event listener to reset button
reset.addEventListener("click", resetList)
