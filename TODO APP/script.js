function addTask() {
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const titleText = titleInput.value.trim();
    const descriptionText = descriptionInput.value.trim();
    const timestamp = new Date().toLocaleString();

    if (titleText === '' || descriptionText === '') return;

    // Create task element
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="task-title">${titleText}</span>
        <span class="task-description">${descriptionText}</span>
        <span class="timestamp">Added on: ${timestamp}</span>
        <button onclick="markComplete(this)" class="complete-btn">Complete</button>
        <button onclick="removeTask(this)">Delete</button>
    `;

    // Add list item to Pending Tasks
    document.getElementById('pendingTasks').appendChild(listItem);

    // Clear the input fields
    titleInput.value = '';
    descriptionInput.value = '';
}

function markComplete(button) {
    const listItem = button.parentElement;
    const completedTasksList = document.getElementById('completedTasks');
    const pendingTasksList = document.getElementById('pendingTasks');
    const taskTitle = listItem.querySelector('.task-title').textContent;
    const taskDescription = listItem.querySelector('.task-description').textContent;
    const timestamp = new Date().toLocaleString();

    // Remove from Pending Tasks
    pendingTasksList.removeChild(listItem);

    // Add to Completed Tasks
    const completedItem = document.createElement('li');
    completedItem.innerHTML = `
        <span class="task-title completed">${taskTitle}</span>
        <span class="task-description">${taskDescription}</span>
        <span class="timestamp">Completed on: ${timestamp}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;
    completedTasksList.appendChild(completedItem);
}

function removeTask(button) {
    const taskList = button.parentElement.parentElement;
    taskList.removeChild(button.parentElement);
}
