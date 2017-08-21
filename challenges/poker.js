/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"

Input:
 - Two arrays of five elements each
  - Each array represents player's hand
  - Each element represents a card

Output:
 - Returns a string "Player 1 wins", "Player 2 wins", or "Draw"

*/

const deck = [2, 2, 2, 2,
              3, 3, 3, 3,
              4, 4, 4, 4,
              5, 5, 5, 5,
              6, 6, 6, 6,
              7, 7, 7, 7,
              8, 8, 8, 8,
              9, 9, 9, 9,
              10, 10, 10, 10,
              11, 11, 11, 11,
              12, 12, 12, 12,
              13, 13, 13, 13,
              14, 14, 14, 14];

function deckOfCards(deck) {
  const cache = {};
  const hand = [];
  let card;

  while (hand.length < 5) {
    card = Math.floor(Math.random() * 51) + 0;
    if (!cache[card]) {
      cache[card] = deck[card];
      hand.push(deck[card]);
    }
  }

  return hand;
}

function getScore(hand) {
  // Generate an object to represent card frequency
  const cardCount = hand.reduce((acc, cur) => {
    acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
    return acc;
  }, {});

  // Accumulate scores of card count frequency
  let score = 0;

  for (const card in cardCount) {
    switch (cardCount[card]) {
      case 4: score += 500; break;
      case 3: score += 300; break;
      case 2: score += 100; break;
      default: break;
    }
  }

  // straight
  hand.sort((a, b) => b - a);
  console.log(hand);
  if (score === 0 && hand[0] - hand[4] === 4) score += 350;

  // add high card
  return score + hand[0];
}


function poker(deck) {
  const hand1 = deckOfCards(deck);
  const hand2 = deckOfCards(deck);

  const player1 = getScore(hand1);
  const player2 = getScore(hand2);

  return player1 > player2 ? 'player one wins' : 'player two wins';
}

console.log(poker(deck));

module.exports = poker;
