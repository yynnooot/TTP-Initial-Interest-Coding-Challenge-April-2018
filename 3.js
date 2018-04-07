/*Question 3 -- getClosingParen(sentence, openingParenIndex): 

"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." 

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis. 

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).*/


function getClosingParen(sentence, openingParenIndex){

  //count how many parenthesis exist before openingParenIndex
  let count = 0;

  //loop through sentence up to openingParenIndex
  for(let i=0; i<openingParenIndex; i++){

    //increment count for every character that is parenthesis
    if(sentence[i] === '('){
      count++
    }
  }

  //loop through sentence backwards up to openingParenIndex
  for(let i=sentence.length-1; i>openingParenIndex; i--){

    //if the count is at 0, and the character is a parenthesis, return index
    if(sent[i] === ')' && count === 0){
      return i
    
    //if count is not yet at 0, and character is a parenthesis, decrement count
    } else if( sent[i] === ')'){
      count--
    }
  }
}
