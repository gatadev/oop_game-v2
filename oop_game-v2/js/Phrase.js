class Phrase {//constructor phrase as parameter
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
//code to display phrase
    addPhraseToDisplay() {
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';
        for (let char of this.phrase) {
            const li = document.createElement('li');
            if (char === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${char}`;
            }
            li.textContent = char;
            phraseList.appendChild(li);
        }
    }
//checking for match
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
//showing letter
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.letter.${letter}`);
        letters.forEach((letterElement) => {
            letterElement.classList.replace('hide', 'show');
        });
    }
}
