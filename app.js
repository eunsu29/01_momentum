const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // localStorage에 저장, getItem으로 불러오기 가능
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에 저장된 username 불러오기

// username 확인 후 form or greeting 표시
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // 정보를 담은채로 function 호출
} else {
    paintGreeting(savedUsername);
}
