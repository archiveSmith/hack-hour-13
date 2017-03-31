// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(n) {
if(n===0) return "Zero";
if(n>9007199254740991) return ''
  var ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
  var teens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
  var tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']
  var tris = ['',' Thousand',' Million',' Billion',' Trillion','Quadrillion']
  var out = ''
  for (let tri = 0; n; n=Math.floor(n/1000), tri++){
    let t=n%1000
    let hun = ~~(t/100)
    let one = t%10
    let ten = (t%100 - one)/10
    hun = ones[hun]+(hun ? ' hundred'+(ten||one?' ' : '') : '')
    t = hun+(ten == 1 ? teens[one] : tens[ten]+(ten&&one ? '' : '')+ones[one])
    out = t+(t.length ? tris[tri] : '')+(out.length ? ', ' : '')+out
  }
  return out
}

module.exports = numToWords;
