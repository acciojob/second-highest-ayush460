//your JS code here. If required.

function secondHighest(arr) {
  // If array is empty or has only one element, return -Infinity
  if (arr.length <= 1) {
    return -Infinity;
  }

  // Find the maximum element in the array
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Find the second highest element in the array
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  // If all elements are the same, return -Infinity
  if (secondMax === -Infinity) {
    return -Infinity;
  }

  return secondMax;
}
