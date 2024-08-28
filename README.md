# To-Do List Application

A simple and interactive To-Do List application built using HTML, CSS, and JavaScript. This app allows users to add, edit, and delete tasks, set due dates, and assign priorities. Tasks are saved in the browser's local storage, ensuring they persist even after refreshing or closing the browser.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Contributing](#contributing)

## Features

- Add tasks with a title, description, due date, and priority.
- Edit existing tasks.
- Delete tasks that are no longer needed.
- Save tasks in the browser's local storage to retain them across sessions.
- Responsive design for both desktop and mobile browsers.

## Installation

To run this To-Do List application locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jai-singh5/To-Do-List.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd todo-list-app
    ```

3. **Open the `index.html` file in your preferred web browser:**

    You can double-click on the `index.html` file, or open it using a web server of your choice (e.g., using Live Server extension in VS Code).

## Usage

1. **Add a Task:**
   - Fill in the task title, description, due date, and select a priority level from the dropdown menu.
   - Click the "Add Task" button to add the task to your To-Do list.

2. **Edit a Task:**
   - Click the "Edit" button next to the task you want to modify. The task details will populate the input fields.
   - Update the task details as needed and click "Add Task" to save changes.

3. **Delete a Task:**
   - Click the "Delete" button next to the task you wish to remove. The task will be deleted from the list.

4. **Persist Data:**
   - The tasks are stored in the browser's local storage. They will remain available even after you refresh the page or close and reopen the browser.

## Code Overview

### HTML

The HTML file (`index.html`) sets up the structure of the To-Do List application, including a form for adding tasks and a list to display them.

### CSS

The CSS file (`styles.css`) is used to style the To-Do List application, making it visually appealing and responsive.

### JavaScript

The JavaScript file (`script.js`) contains the logic for adding, editing, and deleting tasks. It also manages local storage to save and load tasks.

Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

1. Fork the project.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature)`.
5. Open a pull request.
