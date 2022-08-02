window.onload = function () {
  let value = 0;
  for (let index = 0; index < 16; index += 1) {
    for (let index2 = 0; index2 < 16; index2 += 1) {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('id', `div${(value)}`)
      let divTable = document.getElementById('color-table');
      divTable.appendChild(newDiv);
      value += 1;
    }
  }
}

function colorSelection(event) {
  let selectedColor = event.target.idName;
  let table = document.querySelector('color-table');
  table.addEventListener('click', function(event) {
    let reciverColor = document.getElementById()
    reciverColor= selectedColor;
  })
}

let pallet = document.querySelector('color-palette');
pallet.addEventListener('click', colorSelection);