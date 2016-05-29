// Mean Mode
// ----------------------------------------------------------------------------
// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.


function MeanMode(arr) {
  var mean = arr.reduce(function(a,b){
    return a+b;
  })/arr.length;
  var mode = 0;
  var array = arr.sort()
  var count = 1;
  var maxcount=1
  for(var i =0 ;i<array.length;i++){
    if (array[i]===array[i+1]){
      count=count+1
    } else {
      count=1;
    }
    if(count>maxcount){
      mode=arr[i];
    }
  }
  if (mean===mode){
    return 1;
  }
  return 0
}
console.log( MeanMode([1,2,3]) )
console.log( MeanMode([4, 4, 4, 6, 2]) )

// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 1, 2, 3          Output = 0
// Input = 4, 4, 4, 6, 2    Output = 1





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
