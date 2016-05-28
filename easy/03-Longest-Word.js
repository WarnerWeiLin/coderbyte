// Longest Word
// ----------------------------------------------------------------------------
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.


function LongestWord(sen) {

  // code goes here
  var longest="";
  var result=sen.replace(/[^qwertyuiopasdfghjklzxcvbnm]/gi," ");
  result=result.split(" ");
  for (var i=0;i<result.length;i++){
    if (result[i].length>longest.length){
       longest=result[i];
    }
  }
  return longest;

}

console.log( LongestWord( "fun&!! time"  ) )
console.log( LongestWord( "I love dogs" ) )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "fun&!! time"    Output = "time"
// Input = "I love dogs"    Output = "love"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
