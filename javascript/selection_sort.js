function selectionSort(arr) {
  const sortedArray = [];

  while(arr.length > 0) {
    const min = Math.min(...arr);
    const indexOfMin = arr.indexOf(min);
  
    sortedArray.push(min);
    arr.splice(indexOfMin, 1);
  }

  return sortedArray;
}
  

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log(selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: []");
  console.log(selectionSort([]));

  console.log("");

  console.log("Expecting: [-1]");
  console.log(selectionSort([-1]));

  console.log("");

  console.log("Expecting: [-10, 2, 2, 3, 7]");
  console.log(selectionSort([3, 2, 2, 7, -10]));

  console.log("");

  console.log("Expecting: [100, 200]");
  console.log(selectionSort([100, 200]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// // Please add your pseudocode to this file
//We have to repeatedly find the lowest value in an array, and push it to a new array
//it's an Algo, so we need a loop
//we can do a Math.min on the array to find the lowest value, set it as a new const
//set the index value of the min number as a const
//push result of Math.min to a new array.
//use splice to remove the min from the original array, so the loop doesn't use it again


// And a written explanation of your solution
