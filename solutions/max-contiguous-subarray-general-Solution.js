/* SOLUTION-2 - General Maximum subarray problem
Find the contiguous subarray within a one-dimensional array of numbers which has the largest sum. For example, for the sequence of values −2, 1, −3, 4, −1, 2, 1, −5, 4; the contiguous subarray with the largest sum is 4, −1, 2, 1, with sum 6. */

maxContiguousSubArray = arr => {

let globalMax = 0,
    currentMax = 0;

    for(let i = 0; i < arr.length ; i++) {
        currentMax = Math.max(currentMax+arr[i], arr[i]);
        globalMax =  Math.max(globalMax, currentMax);
    }

    return globalMax;
}

let myArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // => 6

console.log(maxContiguousSubArray(myArr));
