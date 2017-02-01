// 6 KYU Multiplication Tables
// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.
//
// Example:
//

// multiplication_table(3,3)
//
// 1 2 3
// 2 4 6
// 3 6 9
//
// -->[[1,2,3],[2,4,6],[3,6,9]]
//
// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

function multiplicationTable(row,col){
  let result = [];

  for (let i=1; i<=row; i++) {
    let row = [];
    for (let j=1; j<=col; j++) {
      row.push(i * j);
    }
    result.push(row);
  }
  return result;
}

Test.assertSimilar(multiplicationTable(2,2), [[1,2],[2,4]])
Test.assertSimilar(multiplicationTable(3,3), [[1,2,3],[2,4,6],[3,6,9]])
Test.assertSimilar(multiplicationTable(3,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
Test.assertSimilar(multiplicationTable(4,4), [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
Test.assertSimilar(multiplicationTable(2,5), [[1,2,3,4,5],[2,4,6,8,10]])
