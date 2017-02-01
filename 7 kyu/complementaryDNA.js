// Description:
//
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
// If you want to know more http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//

function DNAStrand(dna){
  const letters = dna.split("");
  let final = []
  for (var i=0; i < letters.length; i++) {
    switch(letters[i]) {
    case "A":
      final.push("T");
      break;
    case "T":
      final.push("A");
      break;
    case "C":
     final.push("G");
      break;
    default:
     final.push("C");
  }
}
  return final.join("");

}
