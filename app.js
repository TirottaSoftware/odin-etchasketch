const container = document.querySelector('.main-container')

let gridSize = 16;

for (let j = 0; j < gridSize; j++) {
    for (let i = 0; i < gridSize; i++) {
        let flexElement = document.createElement('div');
        flexElement.classList.add('flex-element');
        flexElement.style.width = `calc(100% / ${gridSize})`
        flexElement.style.height = `calc(100% / ${gridSize})`
            flexElement.addEventListener('mouseenter', () => {
                flexElement.classList.toggle('color');
            })
        container.appendChild(flexElement)
    }
}