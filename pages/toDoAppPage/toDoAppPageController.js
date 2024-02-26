function addTask() {
    const currentDatestamp = new Date().toLocaleString();
    const dueDate = document.getElementById('dueDate').value; 
    const dueTime = document.getElementById('dueTime').value; 
    const taskImportance = document.getElementById('taskImportance').value;
    model.app.loggedInUser.toDoAppTasks.push({
        description: document.getElementById('taskDescription').value,
        isDone: false,
        isAlarm: false,
        importance: parseInt(taskImportance),
        timestamp: currentDatestamp, 
        dueDate: dueDate,   
        dueTime: dueTime,
    });
    document.getElementById('taskDescription').value = ''; 
    showToDoList();
}

function changeImportance(selectedElement, index) {
    const newImportance = parseInt(selectedElement.value);
    model.app.loggedInUser.toDoAppTasks[index].importance = newImportance;
    showToDoList();
}

function changeIsDone(checkbox, index) {
    model.app.loggedInUser.toDoAppTasks[index].isDone = checkbox.checked;
    showToDoList();
}

function isAlarmOn(checkbox, index) {
    model.app.loggedInUser.toDoAppTasks[index].isAlarm = checkbox.checked;
    showToDoList();
}


function deleteTask(index) {
    model.app.loggedInUser.toDoAppTasks.splice(index, 1);
    showToDoList();
}


function editTask(index) {
    model.app.loggedInUser.toDoAppTasks[index].editMode = true;
    showToDoList();
}
function saveTask(index) {
    const task = model.app.loggedInUser.toDoAppTasks[index];
    const descriptionId = `editDescription${index}`;
    const dueDateId = `editDueDate${index}`;
    const dueTimeId = `editDueTime${index}`;
    const inputDescriptionTag = document.getElementById(descriptionId);
    const inputDueDateTag = document.getElementById(dueDateId);
    const inputDueTimeTag = document.getElementById(dueTimeId);

    task.description = inputDescriptionTag.value;
    task.dueDate = inputDueDateTag.value;
    task.dueTime = inputDueTimeTag.value;

    task.editMode = false;

   
    const currentDatestamp = new Date().toLocaleString();
    task.datestamp = currentDatestamp;


    showToDoList();
}