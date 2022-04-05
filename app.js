const container = document.querySelector('.main-container')
const gridSizeInput = document.querySelector('#input-grid-size');
const applyButton = document.querySelector('.btn-apply');

applyButton.addEventListener('click', () => {
    loadGrid(gridSizeInput.value)
})

function loadGrid(gridSize){
    container.innerHTML = '';
    
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
}

loadGrid(16)