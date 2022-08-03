window.onload = function creatPixels() {
  for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'pixel');
      const divTable = document.getElementById('pixel-board');
      divTable.appendChild(newDiv);
    }
  }
};

function newSelection(event) {
  const colors = document.querySelector('.selected');
  colors.classList.remove('selected');
  event.target.classList.add('selected');
}

const pallet = document.querySelector('#color-palette');
pallet.addEventListener('click', newSelection);

function paint(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.classList.remove('undefined');
  event.target.classList.remove('red');
  event.target.classList.remove('blue');
  event.target.classList.remove('coral');
  event.target.classList.remove('black');
  event.target.classList.add(selectedColor.classList[1]);
}

const board = document.querySelector('#pixel-board');
board.addEventListener('click', paint);

function cleaner() {
  const boardToClean = document.querySelectorAll('.pixel');
  for (let index = 0; index < 25; index += 1) {
    if (boardToClean[index].classList.length > 0) {
      boardToClean[index].classList.remove('red');
      boardToClean[index].classList.remove('blue');
      boardToClean[index].classList.remove('black');
      boardToClean[index].classList.remove('coral');
    }
  }
}

const boardCleaner = document.getElementById('clear-board');
boardCleaner.addEventListener('click', cleaner);
