function reverse(arr) {
    let blank = []
    for (let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i])
        blank.push(arr[i]);
        console.log(blank)
        
    }
    arr = blank;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
