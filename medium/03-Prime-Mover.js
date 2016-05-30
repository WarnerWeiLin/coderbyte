// Prime Mover
// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number.
// Sample Test Cases
// Input:9
// Output:23
//
// Input:100
// Output:541

function PrimeMover(num) {
  var count=0;
  var Primecheck=function(number){
    for (var i = 1;i<number;i++){
      if(number%i===0 && i!==1){
        return false;
      }
    }
    return true;
  }

  for(var i=2;i<10000;i++){
    if(Primecheck(i)){
      count++
    }

    if(count===num){
      return i;
    }
  }

}

console.log(PrimeMover(9));
console.log(PrimeMover(100))