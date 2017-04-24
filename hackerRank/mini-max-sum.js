// PROBLEM:
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//
// Input Format
//
// A single line of five space-separated integers.
//
// Constraints
//
// Each integer is in the inclusive range .
// Output Format
//
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)
//
// Sample Input
//
// 1 2 3 4 5
// Sample Output
//
// 10 14
// Explanation
//
// Our initial numbers are , , , , and . We can calculate the following sums using four of the five integers:
//
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// If we sum everything except , our sum is .
// As you can see, the minimal sum is  and the maximal sum is . Thus, we print these minimal and maximal sums as two space-separated integers on a new line.
//
// Hints: Beware of integer overflow! Use 64-bit Integer.
//

function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);

    const numbers = [a, b, c, d, e].sort();
    const min = numbers.slice(0,4).reduce(function(a,b) { return a+b }, 0);
    const max = numbers.slice(1).reduce(function(a,b) { return a+b }, 0);

    console.log(min, max);
}
