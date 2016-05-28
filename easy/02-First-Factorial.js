// First factorial
// ----------------------------------------------------------------------------
// have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

function FirstFactorial(num) {
  var result=1
  // code goes here
  for (;num>0;num--){
    result=result*num
  }
  return result;

}

console.log( FirstFactorial( 4 ) )
console.log( FirstFactorial( 8 ) )




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 4    Output = 24
// Input = 8    Output = 40320





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
