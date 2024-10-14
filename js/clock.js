const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // new Date() 날짜를 가져옴
    const hours = String(date.getHours()).padStart(2, "0"); // string.padStart(원하는길이, 채울문자)
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // ms마다 실행

// setTimeout(getClock, 1000); // ms후에 1번 실행
