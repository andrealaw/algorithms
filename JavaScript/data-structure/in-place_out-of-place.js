/*

In-place operation

-Pros: save space
-Cons: destroy the input, can affect codes out of the function

When to use: 
-we are very space constrained or 
-we are positive that we don't need the original input anymore, even for debugging
*/
function squareArrayInPlace(intArray) {

  intArray.forEach(function(int, index) {
      intArray[index] *= int;
  });

  // NOTE: we could make this function return undefined, 
  // since we modify intArray in place.
  return intArray;
}


/*

Out-of-place operation:
-Pros: safer to use with no side effect
-Cons: more space

*/
function squareArrayOutOfPlace(intArray) {

  // we allocate a new array with the length of the input array
  var squaredArray = [];

  intArray.forEach(function(int, index) {
      squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}