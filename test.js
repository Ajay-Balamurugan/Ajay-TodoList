//Add Task
document.addEventListener('DOMContentLoaded', function() {
    var AddTaskButton = document.getElementById("btn");
    AddTaskButton.addEventListener('click', function (event) {
        var inputField = document.getElementById("myinput");
        var taskName = inputField.value;
        if (taskName === "") {
            alert("Please enter a task name."); 
        } else {
            addTasktoScreen(taskName);
        }
    });
});

function addTasktoScreen(taskName){
    var newTask = document.createElement('div'); //create a div to enter the item details
    newTask.classList.add('task'); //add the right class to this div
    var targetdiv = document.getElementById('tasklist'); //find the div under which you want to add your new div
    var newContents = 
    `<div class="taskname"><h3>${taskName}</h3></div>
    <div><img class="addbtn" src="add.svg" id="addimg"></div>
    <div><img class="delbtn" src="delete.svg" id="delimg"></div>`
    newTask.innerHTML = newContents;
    targetdiv.append(newTask);
    newTask.getElementsByClassName('delbtn')[0].addEventListener('click',removeItem); //add on click listener to the button in new div
    newTask.getElementsByClassName('addbtn')[0].addEventListener('click',completeItem); //add on click listener to the button in new div

}

// Remove Task
var removeItemButtons = document.getElementsByClassName('delbtn');
for(var i=0;i<removeItemButtons.length;i++){
    var button = removeItemButtons[i];
    button.addEventListener('click',removeItem)
}
    
    function removeItem(event){
        var removedItem = event.target;
        removedItem.parentElement.parentElement.remove();
    }

// Complete Task
var completeItemButtons = document.getElementsByClassName('addbtn');
for(var i=0;i<completeItemButtons.length;i++){
    var button = completeItemButtons[i];
    button.addEventListener('click',completeItem)
}
    
    function completeItem(event){
        var completedItem = event.target;
        var taskdiv = completedItem.parentElement.parentElement;
        var currentColor = taskdiv.style.backgroundColor;
        if(currentColor == 'green'){
            taskdiv.style.backgroundColor = '#242E33';
        }
        else{
            taskdiv.style.backgroundColor = 'green';
        }
    }