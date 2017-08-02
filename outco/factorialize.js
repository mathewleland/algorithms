function factorialize(num) {
  let result = 1;

  function multiplyNums(count) {
    if (count > num ) { return; }

    result *= count;

    multiplyNums(count+1);
  }

  multiplyNums(1)

  console.log(result);
}

factorialize(5);
factorialize(2);
factorialize(10);
