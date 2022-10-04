const gridContainer = document.getElementById('grid-container')
const clearGridbtn = document.getElementById('clear-grid-btn')
const slider = document.getElementById('gridSize')
const sliderNumber = document.getElementById('grid-range-number')
const colorSelector = document.getElementById('color-selector')
const borderColorSelector = document.getElementById('border-color-selector')
const DEFAULT_GRID_SIZE = 16;


addEventListener('load', setGridSize(16));

clearGridbtn.addEventListener('click', clearGrid);

function setBorderColor() {
        document.querySelectorAll('.grid-item').forEach(element => {
            element.style.borderColor = borderColorSelector.value;
        });
}

borderColorSelector.oninput = setBorderColor;

function setGridSize(num) {
    let gridNum = num;
    const itemPixelSize = 512 / num;
    createGridDivs(num);
    gridContainer.style.gridTemplateColumns = `repeat(${num}, ${itemPixelSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, ${itemPixelSize}px)`;
}

//user input number to create grid size. e.g 16x16 / num x num
function createGridDivs(num) {
        gridReset();
        const gridSize = num * num;
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        div.setAttribute('class', 'grid-item');
        div.classList.add(`grid-item-${i}`);
        div.addEventListener('mouseover', e => {
            div.style.backgroundColor = `${colorSelector.value}`;
            div.style.borderColor = `${borderColorSelector.value}`;
        }) 
    }
}
 



//removes all grid square divs completely. NOT used to clear grid of colors
function gridReset() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
      }
}

function clearGrid() {
    setGridSize(slider.value);
    setBorderColor();
}

slider.oninput = function() {
    sliderNumber.innerText = `${this.value}x${this.value}`;
    setGridSize(this.value);
    setBorderColor();
  }




