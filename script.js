const gridContainer = document.getElementById('grid-container')
const DEFAULT_GRID_UNITS = 256;
const DEFAULT_GRID_AREA = 512 * 512;
const generatedGridItems = document.getElementsByClassName('grid-item')


for (let i = 0; i < DEFAULT_GRID_UNITS; i++) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
    div.setAttribute('class', 'grid-item');
    div.classList.add(`grid-item-${i}`);
    div.addEventListener('mouseover', e => {
        div.style.backgroundColor = 'black';
        console.log(e)
    }) 
}



