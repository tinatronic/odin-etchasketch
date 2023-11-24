const grid = document.getElementById('canvas');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('canvas__cell');
        grid.appendChild(cell);
    }
}

const pixels = document.querySelectorAll('.canvas__cell');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('canvas__cell--filled');
    })
});