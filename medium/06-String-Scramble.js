// String Scramble
// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.
// Sample Test Cases
// Input:"cdore" & str2= "coder"
// Output:"true"
//
// Input:"h3llko" & str2 = "hello"
// Output:"false"

function StringScramble(str1,str2) {

  for (i=0;i<str2.length;i++) {
    console.log(i,str1[i],str2[i])
       if (str1.indexOf(str2[i]) === -1) {
       return false;
       }
       else {
       str1 = str1.replace(str2[i], "");
       }
  }
}

console.log(StringScramble("cdore","coder"))
console.log(StringScramble("h3llko","hello"))