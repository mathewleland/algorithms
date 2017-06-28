// Consider two sets of positive integers,  and . We say that a positive integer, , is between sets  and  if the following conditions are satisfied:
//
// All elements in  are factors of .
//  is a factor of all elements in .
// In other words, some  is between  and  if that value of  satisfies  for every  in  and also satisfies  for every  in . For example, if  and , then our possible  values are and .
//
// Given  and , find and print the number of integers (i.e., possible 's) that are between the two sets.
//
// Input Format
//
// The first line contains two space-separated integers describing the respective values of  (the number of elements in set ) and  (the number of elements in set ).
// The second line contains  distinct space-separated integers describing .
// The third line contains  distinct space-separated integers describing .
//
// Constraints
//
// Output Format
//
// Print the number of integers that are considered to be between  and .
//
// Sample Input
//
// 2 3
// 2 4
// 16 32 96
// Sample Output
//
// 3
// Explanation
//
// There are three  values between  and :
//
// :
// All the elements in  evenly divide .
//  evenly divides all the elements in .
// :
// All the elements in  evenly divide .
//  evenly divides all the elements in .
// :
// All the elements in  evenly divide .
//  evenly divides all the elements in .
// Thus, we print  as our answer.

//Efficiency Rating: O(n^2)

function getTotalX(a, b){
    var matches = [];
    var firstNumber = a[a.length-1];
    var lastNumber = b[0];

    //go through each number in that range.
    //see if everything in A is a factor.
    // if it is, then see if number is a factor for everything in B
    // if not kicked out, push it to matches

    for (var i = firstNumber; i <= lastNumber; i++) {
      if (hasAllFactors(i)) {
        if (isFactorForAll(i)) {
          matches.push(i);
        }
      }
    }

    function hasAllFactors(i) {
      for (var j in a) {
          if (i % a[j] !== 0) return false;
      }
      return true;
    }

    function isFactorForAll(i) {
      for (var j in b) {
        if (b[j] % i !==0) return false;
      }
      return true;
    }

    return matches.length;
}
