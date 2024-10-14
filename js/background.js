const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // js로 html 요소 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // body.appendChild() 바디 마지막에 요소 추가
