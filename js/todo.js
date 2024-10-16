const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // String형태로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement; // 클릭한 대상의 부모요소 확인가능
    li.remove(); // 삭제
}

function paintToDo(newToDo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newToDo;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    saveToDos.forEach((item) => console.log("turn of", item)); // forEach array 안의 각각의 item들로 함수를 실행
}
