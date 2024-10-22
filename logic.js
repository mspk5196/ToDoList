let inputField = document.getElementById("input")
let displayField = document.getElementById("container")
let reset = document.getElementById("resetall")

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

        listItem.innerHTML = inputField.value + "&nbsp;&nbsp;&nbsp;"
        listItem.appendChild(checkbox)
        listItem.appendChild(deleteButton)

        listItem.style.textAlign = "center"

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

