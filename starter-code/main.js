console.log("JS file is connected to HTML! Woo!")

cardOne = "queen";
cardTwo = "queen";
cardThree = "king";
cardFour = "king";

var cards = [queen, queen, king, king];
var cardsInPlay = [];

function isMatch (cards) {
 if (cards[0] === cards[1]) {
	alert('You found a match!');	
} else {
  alert('Sorry, try again.');
}

}

var board = document.getElementsById('game-board');

function createBoard() {

for(var i = 0; i < card.length; i++) {
	var cardElement = document.createELement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards)
	board.appendChild(cardElement);
}

}


function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if this.getAttribute('data-card') === 'king' {
		return cardElement.innerHTML = '<img src="king.png" alt="King" />';
	} else {
		cardElement.innerHTML = '<img src="queen.png" alt="Queen" />';
	}
	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay  = [];
	}
	
}