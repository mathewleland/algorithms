// Instructions from your teacher:
// (3 Points)

// Given a bitset matrix where a 0 represents water, and 1 represents land. Return the value of the maximum contiguous landmass. 

// The value of a landmass is the sum of all 1's connected vertically or horizontally.

// Input: 
// world: Matrix of Numbers

// Output:
// Number

// Input:

// [[1,0,0,1]
//  [0,0,1,1]
//  [0,0,0,1]
//  [1,1,0,0]]

// Output:
// 4

// Input:

// [[1,0,1,1]
//  [1,0,1,1]
//  [1,0,1,1]]

// Output:
// 6

// Input:

// [[1,0,1,0,1]
//  [0,1,0,1 0]
//  [1,0,1,0,1]
//  [0,1,0,1 0]
//  [1,0,1,0,1]]

// Output:
// 1

 
function landMass(world) {
    //once i find a 1, start the counter
    // recurse right and down, increment counter if 1, break if 0
    // if i had more time, i'd use dynamic programming to cache any coordinate i had previously checked, in case the world was huge
    // cache represents coordinates that have already been counted towards another land mass
    
    let highest = 0;
    let currentMass = 0;
    let cache = {};
    
    for (let y=0; y<world.length; y++) {
      for (let x=0; x<world[y].length; x++) {
        let coords = '' + x + y;
        if (cache[coords]) {
          continue;
        } else if (world[y][x] === 1) {
          currentMass = 0;
          countNeighbors(x,y);
        }
      }
    }
    
    function countNeighbors(x,y) {
      currentMass++;
      if (currentMass > highest) {
        highest = currentMass;
      }
      // while (world[y][x+1] == 1 || world[y+1][x] === 1) {
        if (world[y][x+1] === 1) {
          let coords = '' + (x+1) + y;
          cache[coords] = true;
          countNeighbors(x+1, y);
        }
        if (world[y+1][x] === 1) {
          let coords = '' + x + (y+1);
          cache[coords] = true;
          countNeighbors(x, y+1);
        }
      
    }
    
    return highest;
      