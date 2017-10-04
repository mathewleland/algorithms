//  Instructions from your teacher:
// (1 Point)

// Given the a LinkedList node, print every other node's value in reversed order.

// Input:  
// node: ListNode

// Structure of a LinkedList Node:
// ListNode: Object
//       value: Number
//         next: ListNode (default: null)

// Output:
// undefined

// Constraints: 

// 1. Use recursion
// 2. Max Time Complexity: O(N)
// 3. Max Space Complexity: O(N)


// Input: [1]

// [1] -> [2] -> [3] -> [4] -> [5] -> null

// Output:
// 5
// 3
// 1

// Input: [8]

// [8] -> [0] -> [3] -> [1] -> null

// Output:
// 1
// 0

// Input: [1]



function reverseHoppingPrint(node) {
  
  let toggle = true;

  function jumpThrough(currentNode) {
    // first just get to the tail node
    // then reverse out of this recursive stack
      //  printing the node's value if the toggle flag is true
      //  reseting the flag on each progression up through the stack
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      jumpThrough(currentNode);
    }
    if (toggle) console.log(currentNode.value);
    toggle = !toggle;
  }
  
  jumpThrough(node);

}