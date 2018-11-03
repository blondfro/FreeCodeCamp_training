function steamrollArray(arr) {
    // I'm a steamroller, baby

    let newArr = [];

    /* running a reduce on the array and declaring an accumulator - acc -
    * to hold the new array and the current value being evaluated.
    * Then checking to see if the current value is an array and if it is,
    * run it through the function to reduce it down and return it and concat it to the
     * current accumulator.  If it's not an array then concat the value - val. */
    newArr = arr.reduce((acc, val) => Array.isArray(val) ?
        acc.concat(steamrollArray(val)) : acc.concat(val), []);

    console.log(newArr);
    return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);
