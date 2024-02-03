const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value;

    if (taskText.trim() !== '') {
        const task = createTaskElement(taskText);

        // Add task to the pending tasks list
        pendingTasksList.appendChild(task);

        // Clear the input field
        newTaskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const taskElement = document.createElement('li');
    taskElement.textContent = taskText;

    // Add buttons for editing, completing, and deleting tasks
    const editButton = createButton('Edit', () => editTask(taskElement));
    const completeButton = createButton('Complete', () => completeTask(taskElement));
    const deleteButton = createButton('Delete', () => deleteTask(taskElement));

    taskElement.appendChild(editButton);
    taskElement.appendChild(completeButton);
    taskElement.appendChild(deleteButton);

    return taskElement;
}

function createButton(text, onClickHandler) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClickHandler);
    return button;
}

function editTask(taskElement) {
    const newText = prompt('Edit task:', taskElement.textContent);

    if (newText !== null) {
        taskElement.textContent = newText;
    }
}

function completeTask(taskElement) {
    taskElement.classList.toggle('completed');

    // Move task to the completed tasks list
    if (taskElement.classList.contains('completed')) {
        completedTasksList.appendChild(taskElement);
    } else {
        pendingTasksList.appendChild(taskElement);
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
}
