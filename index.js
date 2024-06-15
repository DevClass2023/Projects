// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-task');
        deleteButton.addEventListener('click', deleteTask);

        taskItem.appendChild(deleteButton);
        taskItem.addEventListener('click', toggleComplete);
        taskList.appendChild(taskItem);

        newTaskInput.value = '';
    }

    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
        event.stopPropagation();
    }

    function toggleComplete(event) {
        const taskItem = event.target;
        if (taskItem.tagName !== 'BUTTON') {
            taskItem.classList.toggle('completed');
        }
    }
});
