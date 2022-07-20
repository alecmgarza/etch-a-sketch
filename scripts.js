const container = document.querySelector('#container');
const btn = document.createElement('button');
btn.textContent = 'New Grid';
container.appendChild(btn);

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })        
    };
};

btn.addEventListener('click', () => {

    let squares = prompt('How many squares would you like on each side of the grid?');
    
    function createGrid(squares) {
        if (isNaN(squares) || !squares) {
            alert('Please enter a valid number.')
        } else if (squares > 100) {
            alert('Please enter a number less than 100.')
        } else {
            for (let i = 0; i < squares; i++) {
                const row = document.createElement('div');
                row.classList.add('row');
                container.appendChild(row);
            
                for (let i = 0; i < squares; i++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell');
                    row.appendChild(cell);
            
                    cell.addEventListener('mouseover', () => {
                        cell.style.backgroundColor = 'black';
                    })
                };
            };
        }
    }

    createGrid(squares);
});

// had trouble with dynamically resizing each grid square with padding, try working on logic for button in the meantime