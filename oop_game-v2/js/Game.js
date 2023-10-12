// creating Game class
class Game {
    constructor() {
        this.missed = 0;// missed starts with 0;
 /***initiating the class with the keyword this***/       
 this.phrases = [
            new Phrase('Hello developer'),
            new Phrase('I want to start learning react'),
            new Phrase('Graduating summer 2024'),
            new Phrase('my major is software developer '),
            new Phrase('my minor is cyber security')
        ];
        this.activePhrase = null;
    }
// code to get randomn phrases
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
//function to start game
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
// code to  match letters
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }
// code to remove life 
    removeLife() {
        this.missed++;//first initialize the missed
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed - 1].src = 'images/lostHeart.png';// display the missed everytime wrong letter is chosen with less heart
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
// code to disolve the hiding letter for to be a winner
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.letter.hide');
        return hiddenLetters.length === 0;
    }
//message display when winning
    gameOver(isWinner) {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'block';
        overlay.classList.remove('start');
        if (isWinner) {
            overlay.classList.add('win');
            overlay.querySelector('h2').textContent = 'yuppy, you win!';
        } else {
            overlay.classList.add('lose');
            overlay.querySelector('h2').textContent = 'oops, you lose. Try again!';
        }
    }
}
