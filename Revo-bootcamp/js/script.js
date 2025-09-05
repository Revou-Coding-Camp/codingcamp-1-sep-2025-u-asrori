console.log("Script.js berhasil dimuat!");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
});


let todoList = [];
let newestFirst = true;


function validateInput() {
    const todoInput = document.getElementById('todo-input');
    const todoDateInput = document.getElementById('todo-date-input');

    if (todoInput.value === '' || todoDateInput.value === '') {
        alert('Please fill in both the task and due date.');
    } else {
        addTodo(todoInput.value, todoDateInput.value);
        todoInput.value = '';
        todoDateInput.value = '';
        todoInput.focus();
    }
}

function addTodo(todo, dueDate) {
    
    const todoItem = {
        task: todo,
        dueDate: dueDate,
        completed: false
    };

    
    todoList.push(todoItem);

    
    renderTodoList();
}

function deleteAllTodo() {
    
    todoList = [];

    
    renderTodoList();
}

function filterTodo() {
    console.log("Filter tombol diklik!");
    if (todoList.length === 0){
        alert("Belum ada task yang ditambahkan");
        return;
    }
    todoList.sort((a, b) =>{
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return newestFirst ? dateB - dateA : dateA - dateB;
    });

    newestFirst = ! newestFirst;
    document.getElementById('filter-btn').textContent = newestFirst ? "Urutkan: Terbaru" : "Urutkan: Terlama";
    renderTodoList();

}

function renderTodoList() {
   
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = ''; 
    todoList.forEach((item) => {
        todoListContainer.innerHTML += `
            <li>${item.task} - Due: ${item.dueDate}</li>
        `;
    });
}
document.getElementById('filter-btn').addEventListener('click', filterTodo);
