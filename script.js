const inputBox = document.getElementById("task-name");
const tast = document.getElementById("task");

//For adding new task
function addTask() {
    if (inputBox.value == '') {
        alert("Opps! write something.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        task.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

//Deleting and checking the task
task.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});

// To add a task when the user presses the Enter key
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

//saving the data in the browser
function saveData() {
    localStorage.setItem("data", task.innerHTML);
}

//to show the data
function showTask() {
    task.innerHTML = localStorage.getItem("data");
}

//function calling 
showTask();