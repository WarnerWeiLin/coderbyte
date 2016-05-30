// Caesar Cipher
// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
// Sample Test Cases
// Input:"Hello" & num = 4
// Output:"Lipps"
//
// Input:"abc" & num = 0
// Output:"abc"

function CaesarCipher(str,num) {
  str="Hello"
  str1 = str.split(""); // array of the matches
  // ["n", "o", "c", "h", "a", "n", "g", "e"]

  var strtest="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");     /[a-z]/gi
  for(var i=0;i<str1.length;i++){
    for(var j =0;j<strtest.length;j++){
      if(str1[i]===strtest[j]){
        str1[i]=strtest[j+num]
        j=strtest.length;
      }
    }
  }
  return str1.join("");
}
