// use multiple pointers to find out if two elements in an array sum up to a target
function sortedTwoSum(arr, target) {
    let left = 0, right = arr.length -1;
    while (left < right) {
        if (arr[left] + arr[right] === target) return true;
        if (arr[left] + arr[right] > target) {
            right--;
        }
        else if (arr[left] + arr[right] < target) {
            left++;
        }
    }
    return false;
}

sortedTwoSum([1,2,3,4,5], 8); //true
sortedTwoSum([1,2,3,4,5], 18); //false
sortedTwoSum([1,2,3,4,5], 5); //true
