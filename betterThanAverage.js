function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    sum = sum / arr.length;
    var count = 0
    for (let j = 0; j < arr.length; j++) {
        if (sum < arr[j]) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
