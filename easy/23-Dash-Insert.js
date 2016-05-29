// Dash Insert
// ----------------------------------------------------------------------------
// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str.
// For example: if str is 454793 the output should be 4547-9-3.
// Don't count zero as an odd number.

function DashInsert(str) {

  // code goes here
  str=str.toString();
  str=str.split("");
  var array=[]
  for(var i=0;i<str.length;i++){
    if (parseInt(str[i])%2===1 && parseInt(str[i+1])%2===1){
      array.push(str[i])
      array.push("-")
    } else {
      array.push(str[i])
    }
  }

  return array.join("");

}

console.log( DashInsert(99946) )
console.log( DashInsert(56730) )

// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 99946      Output = 9-9-946
// Input = 56730      Output = 567-30





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
