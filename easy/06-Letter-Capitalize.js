// Letter Capitalize
// ----------------------------------------------------------------------------
// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space.

function LetterCapitalize(str) {

  // code goes here
  str=str.split("")
  str[0]=str[0].toUpperCase();
  for (var i=0;i<str.length;i++){
    if (str[i]===" "){
      str[i+1]=str[i+1].toUpperCase()
    }
  }

  return str.join("");

}

console.log( LetterCapitalize("hello world") )
console.log( LetterCapitalize("i ran there") )




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello world"    Output = "Hello World"
// Input = "i ran there"    Output = "I Ran There"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
