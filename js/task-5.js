function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBg() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector('.color').textContent = newColor;
}
const button = document.querySelector(".change-color");
button.addEventListener("click", changeBg);

