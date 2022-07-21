const container = document.querySelector('#container');

const btn = document.createElement('button');
btn.textContent = 'New Grid';

let newGrid = document.createElement('div');
newGrid.classList.add('grid');

container.appendChild(btn);
container.appendChild(newGrid);

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    newGrid.appendChild(row);

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });        
    };
};

btn.addEventListener('click', () => {
    container.removeChild(newGrid);

    let squares = prompt('How many squares would you like on each side of the grid?');
    
    function createGrid(squares) {
        if (isNaN(squares) || !squares) {
            alert('Please enter a valid number.')
        } else if (squares > 100) {
            alert('Please enter a number less than 100.')
        } else {
            newGrid = document.createElement('div');
            container.appendChild(newGrid);

            for (let i = 0; i < squares; i++) {
                const row = document.createElement('div');
                row.classList.add('row');
                newGrid.appendChild(row);
            
                for (let i = 0; i < squares; i++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    row.appendChild(cell);
            
                    cell.addEventListener('mouseover', () => {
                        cell.style.backgroundColor = 'black';
                    });
                };
            };
        };
    };

    createGrid(squares);
});

// still need to make padding for each square dynamic
// page stops working after an invalid response has been input