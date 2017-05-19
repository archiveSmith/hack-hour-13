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
*/

function poker(hand1, hand2) {

  function calculateScore(hand) {    
    let points = 0;

    let handOne = hand.reduce((obj, curr) => {
      obj[curr] ? obj[curr]++ : obj[curr] = 1;
      return obj;
    }, {});

    let straight = hand.every((n, i, arr) => hand.indexOf(n) + arr[0] === arr[i]);
    
    if (straight) {
      points += 4
    } else {
      //object.values(handOne).includes (get a boolean if it includes it or not);
      //object.entries (get array of [key, value] for object);
      Object.keys(handOne).forEach(key => {
        if (handOne[key] === 4) points += 6;
        if (handOne[key] === 3) points += 3;
        if (handOne[key] === 2) points += 1.25;
        if (handOne[key] === 1) points += 0.2;
      }) 
    }
    return points
  }

  if (calculateScore(hand2) > calculateScore(hand1)) {
    return "Player 2 wins";
  } else if (calculateScore(hand2) < calculateScore(hand1)) {
    return "Player 1 wins";
  } else {
    return "Draw";
  }
  
}
////////////////////////////////////////////////////
console.log(poker([6,6,5,6,7], [4,5,6,7,8]));

/*
Input: 2 arrays;
Output: return string with 3 choices, draw, player x wins

re-create players hand in an object? so can see if got one n more than once, etc.
  straight: indexOf(n) + n[0] === n[i]  (loop to check all)

calculate hand ranking: 
  hi card: just number of card .2
  pair: two card n combined 1.25
  two pair: 2.5 
  three: 3 cards combined 3 
  straight: 4
  fullhouse: 5.5
  four pair: 6
  
*/
///////////////////////////////////////////////////////
module.exports = poker;
