// Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.
//
// What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
// For example:
// '(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.
//
// Examples:
// validBraces( "(){}[]" ) => returns true
// validBraces( "(}" ) => returns false
// validBraces( "[(])" ) => returns false
// validBraces( "([{}])" ) => returns true

function validBraces(braces){

  let stack = [braces[0]];
  let i=1;
  const openers = ["(", "[", "{"];
  const closers = [")", "]", "}"];

  while (i<braces.length) {
    //if first item is not an opening bracket, return false
    if (openers.indexOf(stack[0]) < -1) return false;

    if (openers.indexOf(braces[i]) > -1) { //current char is an opening brace
      stack.push(braces[i]);
      i++;
      continue;
    }

    //current character is a closing brace
    if (closers.indexOf(braces[i]) > -1) {
      let idx = closers.indexOf(braces[i]);
      if (stack[stack.length-1] === openers[idx]) {
        stack.pop();
        i++;
        continue;
      } else {
        //if the most recent brace doesnt correspond to this closing brace, braces are invalid
        return false;
      }
    }
  }


  return (stack.length === 0);
}
