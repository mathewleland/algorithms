function printArray(arr) {
  if (arr.length < 1) {
     return;
  }

  while (arr.length >= 1) {
    console.log(arr.shift());
    printArray(arr);
  }
}

// console.log(printArray([1,2,3,4]));

function frequencies(numbers, target) {
  let count = 0;

  function incrementCounter(arr) {
    if (arr.length < 1) return;
    for (let i =0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
        arr.splice(i,1);
        incrementCounter(arr);
      }
    }
  }

  incrementCounter(numbers);
  return count;
}


// console.log(frequencies([1,2,3,3,3], 3));
// console.log(frequencies([1,2,3,3,3], 1));

function reverseArr(arr) {
  let reversed = [];

  function punchInLast(arr) {
    if (arr.length < 1) return;

    reversed.push(arr.pop());
    punchInLast(arr);
  }

  punchInLast(arr);

  return reversed;
}

console.log(reverseArr([1,2,3,4,5]));
