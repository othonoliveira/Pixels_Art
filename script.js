const divTable = document.getElementById('pixel-board');

window.onload = function creatPixels() {
  for (let index = 0; index < 25; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'pixel');
    divTable.appendChild(newDiv);
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

function generateNewBoard() {
  const deleteBoard = document.getElementById('pixel-board');
  deleteBoard.innerText = '';
  const newBoardInput = document.querySelector('#board-size');
  const newBoardValue = newBoardInput.value;
  for (let index = 0; index < (newBoardValue * newBoardValue); index += 1) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'pixel');
    divTable.appendChild(newDiv);
  }
}

const buttonVQV = document.getElementById('generate-board');
buttonVQV.addEventListener('click', generateNewBoard);
