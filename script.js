function createCanvas(size) {
    const grid = document.getElementById('canvas');
    grid.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${size}, 1fr`);
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('canvas__cell');
            cell.classList.add('canvas__cell-empty');
            grid.appendChild(cell);
        }
    }
}

function draw() {
    const pixels = document.querySelectorAll('.canvas__cell');
    
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.remove('canvas__cell--empty');
            pixel.classList.add('canvas__cell--filled');
        });
    });  
}

function clear() {
    const pixels = document.querySelectorAll('.canvas__cell');
    
    pixels.forEach(pixel => {
        pixel.remove();
    });
}

function changeSize() {
    const sizeBtn = document.getElementById('size-btn');
    sizeBtn.addEventListener('click', () => {
        size = prompt('size ?');
        if (size <= 64) {
            clear();
            createCanvas(size);
            draw();
        } else {
            alert('Please enter a number under 65');
        }
        
    });
}

function init() {
    createCanvas(16);
    draw();
    changeSize();
}

init();