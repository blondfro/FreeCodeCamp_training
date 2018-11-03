function addTogether() {
    let sum = 0;
    let firstNum;   // this will store the value of the first argument
    let secondNum;  // this will store the value of the second argument

    //this function will check if the value passed in is a number or not.
    function checkNumber (num) {
        if (typeof num === 'number') {
            return num
        } else {
            return undefined;
        }
    }

    /*  first we check if there are more one arguments passed in.
        then if there's only one argument passed in, we check if there was
        an attempt to pass in a second value by returning a function.  If there
        is a 2nd argument we check to see if it's a number and if so add it to the
        number then return that.  If not, return undefined.
     */
    if (arguments.length > 1) {
        // first we check the 2 values passed in are actually numbers and assign them to
        // variables.

        firstNum = checkNumber(arguments[0]);
        secondNum = checkNumber(arguments[1]);

        // this if will check if the items are numbers and if so add them up.
        if (firstNum === undefined || secondNum === undefined) {
            console.log('this is undefined');
            return undefined;
        } else {
            sum = firstNum + secondNum;
            console.log(sum);
            return sum;
        }
    } else {
        // grab the first value of the original argument passed in.
        firstNum = arguments[0];
        if (checkNumber(firstNum)) {
            // return a function to grab 2nd argument if it exists.
            return function (arg2) {
                if (firstNum === undefined || checkNumber(arg2) === undefined) {
                    console.log('this is undefined');
                    return undefined;
                } else {
                    sum = firstNum + arg2;
                    console.log(sum);
                    return sum;
                }
            }
        } else {
            console.log('this is undefined');
            return undefined;
        }
    }

    // console.log(sum);

}

addTogether(2,3);
//should return 5

addTogether(2)(3);
//should return 5

addTogether("http://bit.ly/IqT6zt");
//should return undefined

addTogether(2, "3");
//should return undefined

addTogether(2)([3]);
//should return undefined

