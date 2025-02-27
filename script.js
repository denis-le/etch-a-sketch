let container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);

        const cells = document.querySelectorAll('.column');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.classList.add('color');
            })
        });
    }
    container.appendChild(row);
}


