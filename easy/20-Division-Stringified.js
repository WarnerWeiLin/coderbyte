// Division Stringfield
// ----------------------------------------------------------------------------
// Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas.
// If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1").
// For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".

function DivisionStringified(num1,num2) {

  // code goes here
  var result = Math.round(num1 / num2).toString();
  var reverseres=result.split("").reverse()
  var res=[];
  var x=0;
  for (var i = 0;i<reverseres.length;i++){
    res.push(reverseres[i])
    if(i===x+2){
      res.push(",")
      x=x+3;
    }

  }
  if (res.length===4){
    res.pop()
  }
  return res.reverse().join("")
}

console.log( DivisionStringified(5,2) )
console.log( DivisionStringified(6874,0.001) )



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 5 & num2 = 2       Output = "3"
// Input = 6874 & num2 = 67   Output = "103"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
