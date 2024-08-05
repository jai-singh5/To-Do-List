document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const todoList = document.getElementById('todo-list');

    // Load tasks from local storage
    loadTasks();

    // Add task
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            prioritySelect.value
        );
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
    });

    function addTask(title, description, dueDate, priority) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${title}</strong><br>
                <p>${description}</p>
                <small>Due: ${new Date(dueDate).toLocaleDateString()} | Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}</small>
            </div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        const editButton = li.querySelector('.edit-btn');
        const deleteButton = li.querySelector('.delete-btn');

        editButton.addEventListener('click', () => {
            titleInput.value = title;
            descriptionInput.value = description;
            dueDateInput.value = dueDate;
            prioritySelect.value = priority;
            li.remove();
            saveTasks();
        });

        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        todoList.appendChild(li);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        todoList.querySelectorAll('li').forEach(li => {
            const title = li.querySelector('strong').textContent;
            const description = li.querySelector('p').textContent;
            const dueDate = li.querySelector('small').textContent.split(' | ')[0].replace('Due: ', '');
            const priority = li.querySelector('small').textContent.split(' | ')[1].replace('Priority: ', '').toLowerCase();
            tasks.push({ title, description, dueDate, priority });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.title, task.description, task.dueDate, task.priority));
    }
});
