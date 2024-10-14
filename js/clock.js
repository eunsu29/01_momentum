const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // new Date() 날짜를 가져옴
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000); // ms마다 실행

// setTimeout(getClock, 1000); // ms후에 1번 실행
