const gridContainer = document.querySelector('#grid-container')
const leftBtn = document.querySelector('#left')
const resetBtn = document.querySelector('#reset')
const rightBtn = document.querySelector('#right')

let currentSize = 0


// loading grid container with default size
let defaultSize = 4

loadingGridContainer(defaultSize)

function loadingGridContainer(size) {
  currentSize = size
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  const amountOfSize = size * size
  for (let i = 0; i < amountOfSize; i++) {
    let block = document.createElement('div')
    block.style.border = 'solid black'
    block.classList.add('block')
    gridContainer.appendChild(block)

  }
}

const allBox = document.querySelectorAll('.block')
allBox.forEach((box, num) => {
  box.textContent = num + 1
  box.style.display = 'flex';
  box.style.flexDirection = 'column'
  box.style.justifyContent = 'center'
  box.style.alignItems = 'center'
})