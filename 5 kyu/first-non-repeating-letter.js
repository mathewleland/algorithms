// Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.
//
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//
// If a string contains all repeating characters, it should return the empty string ("").


function firstNonRepeatingLetter(s) {

  const counts = {};
  const letters = s.split('');

  //generate counts for each letter
  for (let letter of letters) {
    if (counts[letter.toLowerCase()]) {
      counts[letter.toLowerCase()] += 1;
    }
    else {
      counts[letter.toLowerCase()] = 1;
    }
  }

  //iterate over letters, as soon as one has count of 1 return it
  for (let letter of letters) {
    if (counts[letter.toLowerCase()] == 1) return letter;
  }

  return '';
}

Test.describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
    Test.assertEquals(firstNonRepeatingLetter('sTress'), 'T');
  });
});
