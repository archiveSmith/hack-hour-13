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

// helper function -- checks if hand is a straight
const straightCheck = (hand) => {
  // sort hand from least to greatest
  hand = hand.sort((a, b) => {
    return a - b
  });
  // iterate backwards to check if numbers are sequential
  for (let i = hand.length - 1; i > 0; i -= 1) {
    if (hand[i] - 1 === hand[i - 1]) continue;
    else return false;
  }
  return true;
}
// helper function -- checks hand value
const havePairs = (hand) => {
  // pass into straightCheck function to check if a straight specifically
  let isStraight = straightCheck(hand);
  if (isStraight) {
    hand.push('straight');
    return hand;
  }

  const handObj = {};
  let result = [];

  // loop through array and store in obj with count of appearances
  for (let i = 0; i < hand.length; i += 1) {
    if (!handObj[hand[i]]) handObj[hand[i]] = 1;
    else handObj[hand[i]] += 1;
  }

  // loop through object and push in the number and its count if it's 2 or more
  for (let key in handObj) {
    if (handObj[key] === 4) result.push(Number(key), 4);
    if (handObj[key] === 3) result.push(Number(key), 3);
    if (handObj[key] === 2) result.push(Number(key), 2);
  }

  // sort result backwards to be able to track highest value 
  // not setup correctly, leave commented out until refactor
  // result = result.sort((a, b) => {
  //   return b[0] - a[0];
  // })

  // several if cases to check for final hand evaluation 
  if (result.length === 2 && result[1] === 4) {
    result.push('4-of-a-kind');
    return result;
  }
  if (result.length === 2 && result[1] === 3) {
    result.push('3-of-a-kind');
    return result;
  }
  if (result.length === 4 && result[1] === 2 && result[3] === 2) {
    result.push('2-pair');
    return result;
  }
  if (result.length === 2 && result[1] === 2) {
    result.push('1-pair');
    return result;
  }
  if (result.length === 4 && result[1] === 3 || result[1] === 2 && result[3] === 2 || result[3] === 3) {
    result.push('full house');
    return result;
  }

  // no special cases? push high card
  result.push(hand[hand.length - 1]);
  result.push('high card');
  return result;
}

// helper function checks for numbers between 2-14 (card values)
const validInput = (hand) => {
  // loop through hand and check for valid card numbers
  for (let i = 0; i < hand.length; i += 1) {
    if (hand[i] > 14 || hand[i] < 2) return false;
  }
  return true;
}

function poker(hand1, hand2) {

  // pass hands into validInput checker
  let valid1 = validInput(hand1);
  let valid2 = validInput(hand2);

  // return out proper direction to play poker
  if (!valid1 || !valid2) return 'Invalid input. Please provide card values between 2-14!';

  // hand result possiblities and their value against other hands
  const hands = {
    'high card': 1,
    '1-pair': 2,
    '2-pair': 3,
    '3-of-a-kind': 4,
    'straight': 5,
    'full house': 6,
    '4-of-a-kind': 7
  }

  // pass both hands into evaluation 
  const res1 = havePairs(hand1);
  const res2 = havePairs(hand2);

  // compare returned string against hands object keys
  let value1 = hands[res1[res1.length - 1]];
  let value2 = hands[res2[res2.length - 1]];

  // compare the values from those keys against one another to determine winner
  // if (value1 === value2) {
  //   if (res1[0] > res2[0]) return "Player 1 wins";
  //   else if (res1[0] < res2[0]) return "Player 2 wins";
  //   else return "Draw";
  // }

  if (value1 > value2) return "Player 1 wins";
  else if (value1 < value2) return "Player 2 wins";
  else return "Draw"

}

// console.log(poker([3, 14, 9, 4, 2], [4, 5, 6, 7, 14]));

module.exports = poker;
