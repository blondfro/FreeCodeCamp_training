function dropElements(arr, func) {
    // Drop them elements.
    let newArr = [];
    let tmpArr = [...arr]; // make a copy of the original array.

    /* create a for loop to iterate over the array.
    // then have an if else state to compare the current value in the array to the function.
    // if the loop encounters a true true statement, then automatically return the remainder of the array. */
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr = tmpArr;
            console.log(newArr);
            return newArr;
        } else {
           tmpArr.shift();
        }
    }

    // check to make sure that the for loop never got a true value.  If that's the case, return an empty array.
    if (tmpArr.length === 0) {
        newArr = tmpArr;
    }
    console.log(newArr);
    return newArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
// should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
// should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
// should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;});
// should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
// should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
// should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
// should return [3, 9, 2].