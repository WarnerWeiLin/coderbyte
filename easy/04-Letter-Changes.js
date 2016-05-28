// Letter Changes
// ----------------------------------------------------------------------------
// Hhave the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function LetterChanges(str) {

  // code goes here
  var stringtest1="abcdefghijklmnopqrstuvwxyz"
  var stringtest2="bcdEfghIjklmnOpqrstUvwxyzA"
  var index=-1;
  for(var i=0;i<str.length;i++){
    if (stringtest1.indexOf(str[i])!==-1){
      index=stringtest1.indexOf(str[i])
      str=str.replace(str[i],stringtest2[index])
    }
  }
  return str;
}

console.log( LetterChanges( "hello*3"  ) );
console.log( LetterChanges( "fun times!" ) );





// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello*3"    Output = "Ifmmp*3"
// Input = "fun times!"    Output = "gvO Ujnft!"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
