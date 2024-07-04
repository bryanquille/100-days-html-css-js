const formTasks = document.querySelector('#form-tasks');
const taskInput = document.querySelector('#task-input');
const notesContainer = document.querySelector('#notes-container');

const randomId = () => {
    let id = '';
    for (let i = 0; i < 5; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

const saveTask = () => {
    const taskValue = taskInput.value;
    
    const singleTask = {
        task: taskValue,
        done: false,
        id: randomId()
    };

    if (localStorage.getItem('tasksList') === null) {
        // Creating tasks
        let tasksList = [];
        tasksList.push(singleTask);
        localStorage.setItem('tasksList', JSON.stringify(tasksList));
    } else {
        // Updating tasks
        let tasksList = JSON.parse(localStorage.getItem('tasksList'));
        tasksList.push(singleTask);
        localStorage.setItem('tasksList', JSON.stringify(tasksList));
    }

    getTasks();
    taskInput.value = '';
}

const getTasks = () => {
    if (localStorage.getItem('tasksList') !== null) {
        let tasksList = JSON.parse(localStorage.getItem('tasksList'));
    
        notesContainer.innerHTML = '';
    
        tasksList.forEach(task => {
            if (task.done) {
                notesContainer.innerHTML += `
                <div class="note-container check" id="${task.id}">
                    <p class="note" id="note">${task.task}</p>
                    <div class="actions">
                        <input type="checkbox" name="done" class="done" checked>
                        <button type="button" class="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="trash-can" height="24px" viewBox="0 0 24 24" width="24px" fill="#BB271A"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </div>
                </div>`;    
            } else {
                notesContainer.innerHTML += `
                <div class="note-container" id="${task.id}">
                    <p class="note" id="note">${task.task}</p>
                    <div class="actions">
                        <input type="checkbox" name="done" class="done">
                        <button type="button" class="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="trash-can" height="24px" viewBox="0 0 24 24" width="24px" fill="#BB271A"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </div>
                </div>`;
            }
    
            const deleteBtns = document.querySelectorAll('.delete-btn');
            deleteBtns.forEach(btn => {
                btn.addEventListener('click', deleteTask);
            });

            const doneChecks = document.querySelectorAll('.done');
            doneChecks.forEach(checkbox => {
                checkbox.addEventListener('change', updateCheck);
            });
        });
    }

}

const deleteTask = (e) => {
    const taskId = e.currentTarget.parentElement.parentElement.id;
    let tasksList = JSON.parse(localStorage.getItem('tasksList'));
    tasksList.forEach((task, index) => {
        if (task.id == taskId) {
            tasksList.splice(index, 1);
        }
    });
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
    getTasks();
}

const updateCheck = (e) => {
    const taskId = e.currentTarget.parentElement.parentElement.id;
    let tasksList = JSON.parse(localStorage.getItem('tasksList'));
    tasksList.forEach(task => {
        if (task.id == taskId) {
            task.done = !task.done;
        }
    });
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
    getTasks();
}

getTasks();

formTasks.addEventListener('submit', (e) => {
    e.preventDefault();
    saveTask();
});