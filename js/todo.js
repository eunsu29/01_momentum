const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function deleteTodo(event) {
    const li = event.target.parentElement; // 클릭한 대상의 부모요소 확인가능
    li.remove(); // 삭제
}

function paintTodo(newTodo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
