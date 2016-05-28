// Run Length

// Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
// Sample Test Cases
// Input:"aabbcde"
// Output:"2a2b1c1d1e"
//
// Input:"wwwbbbw"
// Output:"3w3b1w"

function RunLength(str) {

  // code goes here
  var result=[];
  var count=1;
  str=str.split("");
  strlength=str.length;
  for(var i = 0 ;i<str.length ;i++){
    if (str[i]===str[i+1]){
      count++;
    }
    if (str[i]!==str[i+1]){
      result.push(count)
      result.push(str[i])
      count=1;
    }
  }

  return result.join("");

}

console.log(RunLength('aabbcde'));
console.log(RunLength('wwwbbbw'));