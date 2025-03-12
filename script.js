let container = document.querySelector('.container');
container.style.width = '750px';
container.style.height= '750px';


// Creates the grid
const button = document.querySelector('button');

button.addEventListener('click', () => {
    size = prompt('enter grid size (max 100): ');
    if (size > 100 || size < 1) {
        alert("Please enter a valid size")
        size = prompt('enter grid size (max 100): ');
    }
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
    createGrid(size);
});

function createGrid(size) {
    let cellSize = 750 / size + 'px';

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.width = cellSize;
        row.style.height = cellSize;
        for (let j = 0; j < size; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.style.width = cellSize;
            column.style.height = cellSize;
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
}

createGrid(16);