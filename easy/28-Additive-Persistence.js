// Additive Persistence
// ----------------------------------------------------------------------------
// Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit.
// For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.


function AdditivePersistence(num) {
  var count=0;
  var sum= function(num){
    count++
    var array=num.toString().split("")
    var numarray=[]
    var addsum=0;
    for (var i =0;i<array.length;i++){
      numarray.push(parseInt(array[i]));
    }
    addsum=numarray.reduce(function(a,b){
      return a+b;
    });
    if(addsum>9){
      sum(addsum)
    }
  }

  if (num<10) {
    return 0
  } else {
    sum(num)
  }




  return count;

}

console.log( AdditivePersistence(4) )
console.log( AdditivePersistence(19) )

// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 4      Output = 0
// Input = 19     Output = 2





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
