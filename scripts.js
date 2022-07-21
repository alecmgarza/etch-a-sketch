const container = document.querySelector('#container');
const div = document.createElement('div');
div.classList.add('btn');

const btn = document.createElement('button');
btn.textContent = 'New Grid';

let newGrid = document.createElement('div');
newGrid.classList.add('grid');

container.appendChild(div)
container.appendChild(newGrid);
div.appendChild(btn);

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
    let squares = prompt('How many squares would you like on each side of the grid?');
    
    function createGrid(squares) {
        if (squares === null) {
            return;
        } else if (isNaN(squares) || !squares || squares == 0) {
            alert('Please enter a valid number.')
        } else if (squares > 100) {
            alert('Please enter a number less than 100.')
        } else {
            container.removeChild(newGrid);
            newGrid = document.createElement('div');
            newGrid.classList.add('grid');
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