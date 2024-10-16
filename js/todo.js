const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // String형태로 변환
}

function deleteFilter(toDo, li) {
    return toDo.id !== parseInt(li.id);
}

function deleteToDo(event) {
    const li = event.target.parentElement; // 클릭한 대상의 부모요소 확인가능
    toDos = toDos.filter((toDo) => deleteFilter(toDo, li)); // array.filter 조건값이 true일 경우 유지, false일 경우 삭제하여 array 재생성
    // toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove(); // 삭제
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id; // li에 id 부여

    const span = document.createElement("span");
    span.innerText = newToDo.text;

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
    const newToDoObj = {
        text: newToDo,
        id: Date.now(), // 시간으로 개별 id 부여
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string -> array로 변환
    toDos = parsedToDos; // 저장해놨던 array 가져오기
    parsedToDos.forEach(paintToDo); // forEach array 안의 각각의 item들로 함수를 실행
}
