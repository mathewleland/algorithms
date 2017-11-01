const twoSum = (arr, target) => {
  let seen = {};
  
  // arr.forEach(function(num, i) {
  //   console.log(num, i);
  //   console.log('number we are looking for is ' + target-num);
  //   console.log(seen);

  //   if (seen[target - num]) {
  //     console.log('counter was found');
  //     return [seen[target-num], i];
  //   } else if (!(num in seen)) {
  //     console.log('opposite was not found');
  //     seen[num] = i;
  //   }
  // });

  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i,j];
    }
  }

  return false;
};


console.log(twoSum([1,2,3,4,5], 5));

module.exports.twoSum = twoSum;