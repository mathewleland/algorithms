// (4 Points) 
  
//   Given a vertex of a connected, unweighted, undirected graph determine if the graph is a tree. 
  
//   A tree is a an acyclic graph (graph with no cycles). 
  
//   Input:
//   vertex: Vertex  
  
//   Vertex:
//         value: Integer
//         edges: Array of Vertices  
  
//   Output: 
//   Boolean  
  
//   Constraints:
//   1. Max Time Complexity: O(V+E)
//   2. Max Space Complexity: O(V) 
//   where V is the total number of vertices and E is the total number of edges 
  
  
//   Input: [0]
  
  
//          [0]
//         /   \
//       [1] - [2]
  
  
//   Output:
//   false
  
//   Input: [0]
  
  
//       [2] -- [1] -- [5]
//        |         \
//       [0] - [3]  [4]
  
  
//   Output:
//   true

  function isTree(vertex) {
    // I had this problem to whiteboard at outco, full disclosure
    // to be a tree, you can only be pointed to by one other node
    // so if we have a set of children that have been pointed to, we can check against that
    
    let seenNodes = new Set();
    let queue = [vertex];
    
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.edges.length > 0) {
        current.edges.forEach( (node) => {
          if (seenNodes.has(node.value)) {
            return false; //this edge has already been pointed to by another vertex, not a tree
          } else {
            queue.push(node);
            seenNodes.add(node.value);
          }
        })
      }
    }
    
    //if we have made it through every vertex, checked its 
    //edges and still never saw a duplicate child, we can 
    // then know we have a valid tree
    return true;
}