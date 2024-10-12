const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault(); // 새로고침 방지
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit); // 정보를 담은채로 function 호출
