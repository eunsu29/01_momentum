const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval(sayHello, 1000); // ms마다 실행

setTimeout(sayHello, 1000); // ms후에 1번 실행
