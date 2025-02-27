let container = document.querySelector('.container');
let size = 16;

// Creates the grid
const button = document.querySelector('button');

button.addEventListener('click', () => {
    side = prompt('enter grid size: ');
});

for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < size; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
    }
    container.appendChild(row);
}

// Colors the grid
const cells = document.querySelectorAll('.column');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('color');
    })
});