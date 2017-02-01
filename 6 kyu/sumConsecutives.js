// Description:
//
// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
//
// Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.
//
// Same meaning: 1 == 1
//
// 1 != -1
//
// Examples:
//
// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
//
// """So as you can see sum of consecutives 1 is 1
// sum of 3 consecutives 4 is 12
// sum of 0... and sum of 2
// consecutives 3 is 6 ..."""
//
// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]




function sumConsecutives(s) {
  var final = [];

  for (var i=0; i<s.length; i++) {
    var sames = [];

    if (s[i] != s[i+1]) {
      final.push(s[i]);
    } else {
      //start your duplicate list with the original value
      sames.push(s[i]);

      //test to see how many duplicates there are, break when you reach end of list
      for (var j=i+1; j <s.length; j++) {
        if (s[i] == s[j]) {
          sames.push(s[j]);
        }  else if (s[i] != s[j]) {
          i = j-1;
          break;
        }
      }
      final.push(sames.reduce(function(a,b){return a+b},0));
    }
    }
  return final;
}
