function fibonacciArray(n) {
    let count = 2
    var fibArr = [0, 1];
    while (count < n){
        let x
        //console.log(fibArr.length-2, fibArr.length-1)
        x = (fibArr[fibArr.length-1]) + (fibArr[fibArr.length-2])
        fibArr.push(x)
        //console.log(x)
                count++
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
