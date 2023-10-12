
const game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();//calling the startgame when button is click
});

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});
