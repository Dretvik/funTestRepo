function toDoAppPageView() {
    model.app.currentPage = 'toDoAppPage';
    updateNavButtonsVisibility('toDoAppPage');

    document.getElementById('mainContentDiv').innerHTML = /*HTML*/`
    <div id="toDoAppPageContainer">
        <h2>ToDo list App:</h2>
        <div>
            <p>
                <p>Legg til beskrivelse av oppgaven, velg viktighetsgrad, og dato/tid du ønsker at den skal være ferdig og deretter trykk "Legg til oppgave".</p>
                <input id="taskDescription" type="text" placeholder="Oppgave Beskrivelse"/>
                <select id="taskImportance">
                    <option class="importance-1" value="1">1</option>
                    <option class="importance-2" value="2">2</option>
                    <option class="importance-3" value="3">3</option>
                    <option class="importance-4" value="4">4</option>
                    <option class="importance-5" value="5">5</option>
                </select>
                <input id="dueDate" type="date"/>
                <input id="dueTime" type="time"/>
                <button onclick="addTask()">Legg til oppgave</button>
            </p>
            <table id="tasksTable"></table>
        </div>
    </div>
    `;
    showToDoList();

}

setInterval(checkAlarms, 60000);

function showToDoList() {
    const tasksTable = document.getElementById('tasksTable');
    let html =/*HTML*/`
            <tr>
                    <th>Oppgave</th>
                    <th>Gjort</th>
                    <th>Alarm?</th>
                    <th>Viktighetsgrad</th>
                    <th>Opprettet/Redigert Sist</th>
                    <th>Gjøre innen dato</th>
                    <th>Innen klokken</th>
                    <th></th>
                    <th></th>
            </tr>
             `;
    for (let taskIndex = 0; taskIndex < model.app.loggedInUser.toDoAppTasks.length; taskIndex++) {

        html += createHTMLRow(taskIndex);
    }
    tasksTable.innerHTML = html;
}

function createHTMLRow(taskIndex) {
    const task = model.app.loggedInUser.toDoAppTasks[taskIndex];
    const checkedHTML = task.isDone ? 'checked="checked"' : '';
    const isAlarmCheckedHTML = task.isAlarm ? 'checked="checked"' : '';
    const importanceClass = `importance-${task.importance}`;
    const timestamp = task.timestamp ? task.timestamp : 'N/A'; 
    const dueDate = task.dueDate ? task.dueDate : 'N/A'; 
    const dueTime = task.dueTime ? task.dueTime : 'N/A';
    if (!task.editMode) return /*HTML*/`
            <tr>
            <td>${task.description}</td>
                    <td><input class="checkboxes" onchange="changeIsDone(this,${taskIndex})" type="checkbox" ${checkedHTML}/></td>
                    <td><input class="checkboxes alarmCheckBoxes" onchange="isAlarmOn(this,${taskIndex})" type="checkbox" ${isAlarmCheckedHTML}/></td>
                    <td class="${importanceClass}"><select onchange="changeImportance(this,${taskIndex})"class="${importanceClass}">
                        ${generateImportanceOptions(task.importance)}</select></td>
                        <td>${timestamp}</td>
                        <td>${dueDate}</td>
                        <td>${dueTime}</td>
                        <td><button id="deleteTaskButton" onclick="deleteTask(${taskIndex})">Slett</button></td>
                        <td><button onclick="editTask(${taskIndex})">Rediger</button></td>
            </tr>
            `;
    return /*HTML*/`
            <tr>
            <td><input id="editDescription${taskIndex}" type="text" value="${task.description}"/></td>
                    <td><input class="checkboxes" onchange="changeIsDone(this,${taskIndex})" type="checkbox" ${checkedHTML}/></td>
                    <td><input class="checkboxes alarmCheckBoxes" onchange="isAlarmOn(this,${taskIndex})" type="checkbox" ${isAlarmCheckedHTML}/></td>
                    <td class="${importanceClass}"><select onchange="changeImportance(this,${taskIndex})"class="${importanceClass}">
                        ${generateImportanceOptions(task.importance)}
                        </select></td>
                        <td>${timestamp}</td>
                        <td><input id="editDueDate${taskIndex}" type="date" value="${dueDate}"/></td>
                        <td><input id="editDueTime${taskIndex}" type="time" value="${dueTime}"/></td>
                        <td><button id="deleteTaskButton" onclick="deleteTask(${taskIndex})">Slett</button></td>
                        <td><button onclick="saveTask(${taskIndex})">Lagre</button></td>
            </tr>
            `;
}

function generateImportanceOptions(selectedValue) {
    let optionsHTML = '';
    for (let i = 1; i <= 5; i++) {
        const selected = i === selectedValue ? 'selected' : '';
        optionsHTML += `<option ${selected}>${i}</option>`;
    }
    return optionsHTML;
}

function checkAlarms() {
    const now = new Date();
    for (let taskIndex = 0; taskIndex < model.app.loggedInUser.toDoAppTasks.length; taskIndex++) {
        const task = model.app.loggedInUser.toDoAppTasks[taskIndex];
        if (task.isAlarm && !task.isDone) {
            const dueDateTime = new Date(`${task.dueDate}T${task.dueTime}`);
            if (dueDateTime <= now) {
                
                alert(`Alarm for oppgave: ${task.description}`);
            }
        }
    }
}