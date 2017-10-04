// Instructions from your teacher:
// (2 Points)

// Given a TreeNode, return an array of the sum at every level.

// Input:
// node: TreeNode

// TreeNode: Object
//        value: Number
//           left: TreeNode (default: null)
//         right: TreeNode (default: null)

// Output:
// Array


// Constraints:
// 1. Max Time Complexity: O(N)
// 2. Max Space Complexity: O(N)

// Input: [2]

//        [2]
//       /   \
//     [1]    [3]
//     / \       \
//   [4]  [3]     [7]


// Output:
// [2, 4, 14]

function levelWeights(node) {
  //create an array of arrays, each idx of array corresponding to the level the nodes are at
  let results = [];
  
  let children = [node.value]; //will be array of arrays, intialize with parent node value
  
  function traverseTree(node, level) {
    if (!node.left && !node.right) {
      return;
    } else {
        if (node.left) {
          // if there is no subarray already for that level in the childrenqueue
          // then create that empty subarray.  then add the child value to it
          if (!arr[level]) arr[level] = [];
          children[level].push(node.left.value);
          traverseTree(node.left, level++);
        }
        if (node.right) {
          if (!arr[level]) arr[level] = [];
          children[level].push(node.right.value);
          traverseTree(node.right, level++);
        }
    }
  }
  
  traverseTree(node, 0);
  
  // now we have a fully popluated children array that should look like
  // [[2], [1,3], [4,3,7]]
  // so now we want to iterate over that, sum up each array and push it to final
  
  for (let i=0; i<children.length; i++) {
    let sum = children[i].reduce(function(a,b) {
      return a+b
    }, 0);
    results.push(sum);
  }
  
  return results;
  
  
}