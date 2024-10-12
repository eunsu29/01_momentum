const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const name = loginInput.value;
    console.log(name);
}

loginButton.addEventListener("click", onLoginBtnClick);
