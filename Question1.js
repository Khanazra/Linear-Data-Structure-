// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

// Returns number of pairs in arr[0..n-1]

function printPairs(arr, n, sum) {
  let count = 0;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (arr[i] + arr[j] == sum)
        console.log("(" + arr[i] + ", " + arr[j] + ")" + "<br>");
}

// Driver function to test the above function

let arr = [1, 5, 7, -1, 5];
let n = arr.length;
let sum = 6;
printPairs(arr, n, sum);
