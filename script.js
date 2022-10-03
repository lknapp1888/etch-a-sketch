const gridContainer = document.getElementById('grid-container')
const btn = document.getElementById('grid-btn')
const DEFAULT_GRID_UNITS = 256;
const DEFAULT_GRID_AREA = 512 * 512;

btn.addEventListener('click', setGridSize);


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
            div.style.backgroundColor = 'black';
            console.log(e)
        }) 
    }
}

function gridReset() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
      }
}


function setGridSize() {
    let gridNum = prompt('Please enter grid num:', '');
    // set rule so max possible grid size is 92X92
    if (gridNum > 92) {
        gridNum = 92;
    }
    if (gridNum <= 0) {
        alert('Please enter a positive value between 1 and 92')
        return setGridSize();
    }
    const itemPixelSize = 512 / gridNum;
    createGridDivs(gridNum);
    gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, ${itemPixelSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNum}, ${itemPixelSize}px)`;
}





