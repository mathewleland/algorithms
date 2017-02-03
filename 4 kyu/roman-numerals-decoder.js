//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
// Example:
// solution('XXI'); // should return 21


function solution(roman){
  var sum = 0;
  var chars = roman.split('');
  var nums = [];


  var translate = function(letter) {
      switch(letter) {
        case "M":
          nums.push(1000);
          break;
        case 'D':
          nums.push(500);
          break;
        case 'C':
          nums.push(100);
          break;
        case 'L':
          nums.push(50);
          break;
        case 'X':
          nums.push(10);
          break;
        case 'V':
          nums.push(5);
          break;
        case 'I':
          nums.push(1);
      }
  };

  //convert each character to a number, push to numbers array
  for (var i=0; i<chars.length; i++) {
    translate(chars[i]);
  }

  //within numbers array, sum them up roman-numerals style
  for (var i=0; i<nums.length; i++) {
    if (nums[i] >= nums[i+1] || nums[i+1] == undefined) {
      sum += nums[i];
    }
    else {
      sum += nums[i+1] - nums[i];
      i++;
    }
  }

  return sum;
}
