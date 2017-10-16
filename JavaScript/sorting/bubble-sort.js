/*

Bubble Sort
Written by: Andrea Law with JavaScript

Time complexity: O(n^2)
Space complexity: O(1)
*/

function bubbleSort(arr){
  var sorted = false;
  var endIndex = arr.length;
  while (!sorted){
    sorted = true;

    for (var i = 0; i < endIndex; i++){
      var first = arr[i-1];
      var second = arr[i];
      if (first > second){
        var temp = first;
        arr[i-1] = second;
        arr[i] = temp;
        sorted = false;
        console.log(arr);
      }
    }

    endIndex --; // the largest on the right
    
  }
  return arr;
  
}

bubbleSort([3,2,1]); // [1,2,3]