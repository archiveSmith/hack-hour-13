// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	if(str === '') return true;

	let openOpp = {};
	
	var ans = str.toLowerCase().replace(/_/g,' ').match(/\w+/gi);
	for(let i=0; i<ans.length; i++){
		var rTemp = ans[i].split('').reverse().join('');
		if(!(ans[i] in openOpp) && !(rTemp in openOpp)){
			openOpp[ans[i]] = rTemp;
		}
	}
	//openOpp = {word: drow, here: ereh}
	//closed = {drow:true, ereh: true}
	let closed = {};
	for(let key in openOpp){
		closed[openOpp[key]] = true;
	}
	
	//return ans;
	var stack=[];
	var word, last;
	for(let index=0; index < ans.length; index++){
		word = ans[index];
		if(word in openOpp){
			stack.push(word);
		}
		else{
			if(word in closed){
				last = stack.pop();
				if(openOpp[last] !== word) return false;
			}
		}
	}
	return stack.length === 0;
	
}

module.exports = matchWord;
