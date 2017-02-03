// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered -->


function scramble(str1, str2) {
  function scramble(str1, str2) {
  str1 = str1.split('');
  str2 = str2.split('');

  for (let i=0; i<str2.length; i++) {
    let index = str1.indexOf(str2[i]);

    if (index > -1) {
      str1.splice(index, 1);
    }
    else return false;
  }
  return true;

}


  //second solution below, wasn't efficient enough
  ///////////////////////////////////
  // function getCount(letter, arr) {
  //   let count = 0;
  //   for (let i=0; i<arr.length; i++) {
  //     if (arr[i] == letter) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  //
  // for (let i=0; i<str2.length; i++) {
  //   if (getCount(str2[i], str2) > getCount(str2[i], str1)) return false;
  // }
  // return true;

  // original solution below, but refactored above to be more succinct
  //////////////////////////
  // const str1counts = {};
  // const str2counts = {};

  // for (let letter of str1letters) {
  //  if (str1counts[letter]) {
  //    str1counts[letter]++;
  //  }
  //  else {
  //    str1counts[letter] = 1;
  //  }
  // }

  // for (let letter of str2letters) {
  //  if (str2counts[letter]) {
  //    str2counts[letter]++;
  //  }
  //  else {
  //    str2counts[letter] = 1;
  //  }
  // }


  // for (let letter in str2counts) {

  // if (str2counts[letter] > str1counts[letter] || str1counts[letter] ==undefined) return false;}

  // return true;

  }


describe('Intial Tests', function(){
  Test.assertEquals(scramble('rkqodlw','world'),true);
  Test.assertEquals(scramble('cedewaraaossoqqyt','codewars'),true);
  Test.assertEquals(scramble('katas','steak'),false);
  Test.assertEquals(scramble('scriptjava','javascript'),true);
  Test.assertEquals(scramble('scriptingjava','javascript'),true);
  Test.assertEquals(scramble('scriptsjava','javascripts'),true);
  Test.assertEquals(scramble('jscripts','javascript'),false);
  Test.assertEquals(scramble('aabbcamaomsccdd','commas'),true);
});
