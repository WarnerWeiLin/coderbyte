// Counting Minutes I
// ----------------------------------------------------------------------------
// Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times.
// The time will be in a 12 hour clock format.
// For example: if str is 9:00am-10:00am then the output should be 60.
// If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {
  //str
  //00:00pm-00:00pm
  //0:00pm-00:00pm
  //00:00pm-0:00pm
  //0:00pm-0:00pm
  str=str.split("")
  if(str.length<15 && str[5]==='m'){
    str.unshift('0')
  }
  if (str.length<15 && str[str.length-1]==='m'){
    str.splice(8,0,'0')
  }
  str.pop()
  str=str.join("").replace("m","").split("-")


  var Count=function(time1,time2){
    count=0
    time1=time1.split('');
    time2=time2.split('');
    time1.unshift(time1.pop());
    time2.unshift(time2.pop());

    return count
  }

  Count(str[0],str[1])
  // code goes here
  return str;

}
console.log( CountingMinutesI("12:30pm-12:00am") )
console.log( CountingMinutesI("1:23am-1:08am") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "12:30pm-12:00am"      Output = 690
// Input = "1:23am-1:08am"        Output = 1425





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
