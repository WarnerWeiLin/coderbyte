// AB Check
// ----------------------------------------------------------------------------
// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
// Otherwise return the string false.


function ABCheck(str) {

  // code goes here
  var result = false;
  string=str.split("")
  for(var i=0;i<string.length;i++){
    if(string[i]==="a"&& string[i+4]==="b"){
      return true;
    }
  }
  return result;

}

console.log( ABCheck("after badly") )
console.log( ABCheck("a...b") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "after badly"    Output = "false"
// Input = "Laura sobs"     Output = "true"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
