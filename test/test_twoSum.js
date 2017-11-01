const expect = require('chai').expect;

describe('Two Sum tests', function(){
  const twoSum = require('../leetcode/twoSum').twoSum;
  const arr1 = [1,2,3,4,5];

  it('should return an array', function() {
    expect(twoSum(arr1, 3)).to.be.an('array');
  });
  
  it('should return the right indices', function() {
    expect(twoSum(arr1,3)[0]).to.equal(0);
    expect(twoSum(arr1,3)[1]).to.equal(1);
    expect(twoSum(arr1, 3)).to.deep.equal([0,1]);
  });

  it('should match the array exactly', function() {
    expect(twoSum(arr1, 5)).to.deep.equal([0,3]);
  })

  it('should return false if no indices sum up to the target', function() {
    expect(twoSum(arr1, 13)).to.be.false;
  });

  it('should return first pair of indices if there are multiple pairs', function() {
    expect(twoSum(arr1, 5)[0]).to.equal(0);
    expect(twoSum(arr1, 5)[1]).to.equal(3);
  })
});