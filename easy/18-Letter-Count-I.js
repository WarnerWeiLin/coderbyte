// Letter Count I
// ----------------------------------------------------------------------------
// Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters.
// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
// If there are no words with repeating letters return -1.
// Words will be separated by spaces.

function LetterCountI(str) {
  var mostlettersword="-1";
  var words=str.split(" ");//["Hello","apple","pie"]
  var LetterCount=1;
  var maxLetterCount=0
  for (var i=0;i<words.length;i++){
    for (var j=0;j<words[i].length;j++){
      if (words[i][j]===words[i][j+1]){
        LetterCount=LetterCount+1;
        if(LetterCount>maxLetterCount){
          maxLetterCount=LetterCount;
          mostlettersword=words[i];
        }

      }
    }
    LetterCount=1;
  }


  return mostlettersword
}
console.log( LetterCountI("Hello apple pie") )
console.log( LetterCountI("No words") )



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "Hello apple pie"    Output = "Hello"
// Input = "No words"           Output = -1





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
