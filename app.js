// COLLEGO PULSANTE PLAY
const playButton = document.getElementById('play_button');
console.log(playButton);

// CREO L'ASCOLTO AL CLICK DEL PULSANTE PLAY
playButton.addEventListener('click', function () {

    // COLLEGO IL GRID-CONTAINER
    const gridContainer = document.querySelector('.grid_container');
    console.log(gridContainer);

    // CREO VARIABILE PER LA DIFFICOLTÀ
    const difficulty = document.getElementById('select_difficulty').value;
    console.log(difficulty);

    // CREO LE CELLE DENTRO IL "GRID-CONTAINER" IN BASE ALE VARIE DIFFICOLTÀ
    if (difficulty == 'Easy') {
        for (let i = 0; i < 100; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.width=`calc(100% / 10)`;
            gridContainer.append(cellElement);
            console.log(cellElement);
        }
    } else if (difficulty == 'Hard') {
        for (let i = 0; i < 81; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.width=`calc(100% / 9)`;
            gridContainer.append(cellElement);
            console.log(cellElement);
        }
    } else {
        for (let i = 0; i < 49; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            console.log(cellElement);
            gridContainer.append(cellElement);
            cellElement.style.width=`calc(100% / 7)`;
        }
    }
    
})