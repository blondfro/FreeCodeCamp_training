function telephoneCheck(str) {
    // Good luck!
    /*
        Use a reg ex to test the incoming string.
        ^ denotes the beginning of the string.
        Use () to group content.
        (1\s?)? allows for “1” or “1 ” if there is one.
        \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
        x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits
         surrounded by parentheses, or three digits by themselves with no parentheses.
        [\s\-]? checks for spaces or dashes between the groups of digits.
        $ denotes the end of the string. In this case the beginning ^ and end of the string
         $ are used in the regex to prevent it from matching any longer string that might
         contain a valid phone number (eg. “s 555 555 5555 3”).
        Lastly we use regex.test(str) to test if the string adheres to the regular
         expression, it returns true or false.
     */
    let regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    let result = regEx.test(str);
    console.log(result);
    return result;


    // let numList = '0123456789';
    // let tmpStr = str.split('')
    //     .filter(x => {if (numList.indexOf(x) !== -1) {return x}})
    //     .join('');
    // console.log(tmpStr);
    //
    // if (tmpStr.length < 10 || tmpStr.length > 11) {
    //     console.log('invalid');
    //     return false
    // } else if (tmpStr.length === 10) {
    //     console.log(tmpStr);
    //     console.log('valid');
    //     return true
    // } else if (tmpStr.length === 11 && tmpStr[0] === '1') {
    //     console.log(tmpStr[0]);
    //     console.log('valid');
    //     return true;
    // } else {
    //     console.log('invalid');
    //     return false;
    // }

    // console.log(tmpStr.length);


    // return true;
}

// telephoneCheck("555-555-5555");
// should return a boolean.

// telephoneCheck("1 555-555-5555");
// // should return true.
//
// telephoneCheck("1 (555) 555-5555");
// // should return true.
//
// telephoneCheck("5555555555");
// // should return true.
//
// telephoneCheck("555-555-5555");
// // should return true.
//
// telephoneCheck("(555)555-5555");
// // should return true.
//
// telephoneCheck("1(555)555-5555");
// // should return true.
//
// telephoneCheck("555-5555");
// // should return false.
//
// telephoneCheck("5555555");
// // should return false.
//
// telephoneCheck("1 555)555-5555");
// // should return false.
//
// telephoneCheck("1 555 555 5555");
// // should return true.
//
// telephoneCheck("1 456 789 4444");
// // should return true.
//
// telephoneCheck("123**&!!asdf#");
// // should return false.
//
// telephoneCheck("55555555");
// // should return false.
//
// telephoneCheck("(6054756961)");
// // should return false
//
// telephoneCheck("2 (757) 622-7382");
// // should return false.
//
// telephoneCheck("0 (757) 622-7382");
// // should return false.
//
// telephoneCheck("-1 (757) 622-7382");
// // should return false
//
// telephoneCheck("2 757 622-7382");
// // should return false.
//
// telephoneCheck("10 (757) 622-7382");
// // should return false.
//
// telephoneCheck("27576227382");
// // should return false.
//
// telephoneCheck("(275)76227382");
// // should return false.
//
// telephoneCheck("2(757)6227382");
// // should return false.
//
// telephoneCheck("2(757)622-7382");
// // should return false.
//
// telephoneCheck("555)-555-5555");
// // should return false.
//
// telephoneCheck("(555-555-5555");
// // should return false.
//
// telephoneCheck("(555)5(55?)-5555");
// // should return false.

