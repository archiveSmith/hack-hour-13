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

const evalHand = (hand) => {
  handObj = {}
  handArr = []
  hand.forEach(item => {
    if (!handObj[item]) handObj[item] = 1
    else handObj[item] += 1
  });
  const cards = Object.keys(handObj)
  for (let i = 0; i < cards.length; i += 1) {
    let obj = {}
    obj[cards[i]] = handObj[cards[i]]
    handArr.push(obj);
  }
  handArr.sort((a, b) => {
    return a[Object.keys(a)[0]] - b[Object.keys(b)[0]]
  });
  // console.log(handArr);
  if (handArr.length === 2) {
    let highCardObj = handArr[handArr.length - 1]
    if (highCardObj[Object.keys(highCardObj)[0]] === 4) return { '4-kind': handArr }
    if (highCardObj[Object.keys(highCardObj)[0]] === 3) return { 'full': handArr }
  }
  if (handArr.length === 3) {
    let highCardObj = handArr[handArr.length - 1]
    if (highCardObj[Object.keys(highCardObj)[0]] === 3) return { '3-kind': handArr }
    if (highCardObj[Object.keys(highCardObj)[0]] === 2) return { '2-pair': handArr }
  }
  if (handArr.length === 4) {
    let highCardObj = handArr[handArr.length - 1]
    // console.log(highCardObj)
    if (highCardObj[Object.keys(highCardObj)[0]] === 2) return { '1-pair': handArr }
  }
  if (handArr.length === 5) {
    let isStraight = true;
    for (let i = 1; i < handArr.length - 1; i += 1) {
      let prevCardObj = handArr[i - 1]
      let currCardObj = handArr[i];
      if (Number(Object.keys(currCardObj)[0]) - 1 !== Number(Object.keys(prevCardObj)[0])) isStraight = false
    }
    if (isStraight === true) return { 'straight': handArr }
    handArr.sort((a, b) => {
      return Object.keys(a)[0] - Object.keys(b)[0]
    });
    return { 'high': handArr }
  }
}

// console.log(evalHand([2, 3, 4, 5, 6]));

const winOrder = {
  '4-kind': 7,
  'full': 6,
  'straight': 5,
  '3-kind': 4,
  '2-pair': 3,
  '1-pair': 2,
  'high': 1,
}

function poker(hand1, hand2) {
  if (hand1.length !== 5 || hand2.length !== 5) return 'Hands must have 5 cards';
  let allCards = hand1.concat(hand2);
  for (let i = 0; i < allCards.length; i += 1) {
    if (allCards[i] > 14 || allCards[i] < 2) return 'Cards must be between 2 and 14 inclusive';
  }
  hand1Obj = evalHand(hand1)
  hand2Obj = evalHand(hand2)
  hand1Eval = Object.keys(hand1Obj)[0]
  hand2Eval = Object.keys(hand2Obj)[0]
  hand1Arr = hand1Obj[Object.keys(hand1Obj)[0]]
  hand2Arr = hand2Obj[Object.keys(hand2Obj)[0]]
  console.log('1 ' + hand1Eval)
  console.log('2 ' + hand2Eval)
  if (winOrder[hand1Eval] > winOrder[hand2Eval]) return 'Player 1 wins!'
  if (winOrder[hand1Eval] < winOrder[hand2Eval]) return 'Player 2 wins!'
  if (winOrder[hand1Eval] === winOrder[hand2Eval]) {
    if (Number(Object.keys(hand1Arr[hand1Arr.length-1])[0]) > Number(Object.keys(hand2Arr[hand2Arr.length-1])[0])) return 'Player 1 wins!'
    if (Number(Object.keys(hand1Arr[hand1Arr.length-1])[0]) < Number(Object.keys(hand2Arr[hand2Arr.length-1])[0])) return 'Player 2 wins!'
    return 'Draw';
  }
}

module.exports = poker;

console.log(poker([3,3,3,2,2], [4,4,4,3,3]));
