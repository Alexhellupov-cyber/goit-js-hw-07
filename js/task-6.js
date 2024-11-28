function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxCont = document.getElementById('boxes');
  boxCont.innerHTML = '';
  const boxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }
  boxCont.append(...boxes); 
  boxCont.style.backgroundColor = '#f6f6fe';
  }
  function destroyBoxes() {
    document.getElementById('boxes').innerHTML = ''; 
    document.getElementById('boxes').style.backgroundColor = 'transparent';
  }
  document.querySelector('[data-create]').addEventListener('click', function() {
    const input = document.querySelector('#controls input');
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; 
    }
  });
  document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);