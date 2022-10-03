const gridContainer = document.getElementById('grid-container')
const btn = document.getElementById('grid-btn')
const DEFAULT_GRID_UNITS = 256;
const DEFAULT_GRID_AREA = 512 * 512;


function createGridDivs(num) {
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

btn.addEventListener('click', setGridSize);

/* stuck here. Need to receive input from button click which will be the grid size

const userGridUnits = () => {
    btn.addEventListener('click', promptGridSize);

function promptGridSize() {
    let noOfSquares = prompt('Please specify the number of squares per side for the grid', '');
    return noOfSquares;
}

console.log(userGridUnits)

*/


