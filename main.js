console.log("JS file is connected to HTML! Woo!");

cardOne = "queen";
cardTwo = "queen";
cardThree = "king";
cardFour = "king";


if (cardOne === cardTwo) {
	alert('You found a match!');
}
else if (cardThree === cardFour) {
alert ('You found a match!');
}
else {
  alert('Sorry, try again.');
}


/* var board = document.getElementsById('game-board');

function createBoard() {

for(var i = 0; i < card.length; i++) {

	var cardElement = document.createELement('div');

	cardElement.className = 'card';

	board.appendChild(cardElement);
}

}
*/
