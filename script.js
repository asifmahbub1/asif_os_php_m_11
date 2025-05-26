let todos = [];

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const listItems = document.getElementById('todo-list');

function renderTodos() {
    listItems.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${index + 1}. ${todo}</span>
            <button onclick="removeTodo(${index})" class="btn btn-danger btn-sm">Delete</button>
        `;
        listItems.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
});

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}
