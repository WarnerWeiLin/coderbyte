// Second GreatLow
// ----------------------------------------------------------------------------
// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space.
//  For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
// The array will not be empty and will contain at least 2 numbers.
// It can get tricky if there's just two numbers!

function SecondGreatLow(arr) {

  // code goes here
  arr=arr.sort(function(a,b){return a-b})
  var results=""
  for(var i=0;i<arr.length;i++){
    if (arr[i]===arr[i+1]){
      arr.shift()
    }
    if (arr[arr.length-1]===arr[arr.length-2]){
      arr.pop()
    }
  }
  var secondgreatest=arr[arr.length-2];
  var secondlowest=arr[1];
  return results+secondlowest + " " + secondgreatest;

}

console.log( SecondGreatLow([2, 42, 42, 180]) )
console.log( SecondGreatLow([4, 90]))




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 1, 42, 42, 180   Output = "42 42"
// Input = 4, 90            Output = "90 4"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
