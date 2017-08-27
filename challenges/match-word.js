// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	if(str === '') return true;

	// @openOpp a map of a word and the reverse word
	let openOpp = {};
	
	// ans is a collection of words
	var ans = str.toLowerCase().replace(/_/g,' ').match(/\w+/gi);
	for(let i=0; i<ans.length; i++){
		// r temp is the reverse of each word in the collection
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
	var stack=[];
	var word, last;
	for(let index=0; index < ans.length; index++){
		word = ans[index];
		if(word in openOpp){ // if you are a word, go to the stack
			stack.push(word); // push into the stack of open words
		}
		else{ // if the word is in the closed map, then pop the stack, and save the word in last
			if(word in closed){
				last = stack.pop(); // if the current word it's a closed word, then pop the stack of open words
				if(openOpp[last] !== word) return false; // if the value of the last open word in the open map is different then the current word (which is reversed), then return false
			}
		}
	}
	return stack.length === 0; // at this point if the stack is empty, we can return true
	
}

module.exports = matchWord;
