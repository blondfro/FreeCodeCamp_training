function palindrome(str) {
    // Good luck!
    let isPalindrome = false;
    let regex = /[A-Za-z0-9]/g;
    let newStr = str.match(regex).join('').toLowerCase();
    // console.log(newStr);

    let revStr = str.match(regex).reverse().join('').toLowerCase();
    // console.log(revStr);
    


    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === revStr[i]) {
            // console.log('good so far');
            isPalindrome = true;
        } else {
            console.log('not a palindrome');
            return isPalindrome = false;
        }
    }

    console.log('made it through');
    return isPalindrome;
}




// palindrome("eye");
// should return true.

// palindrome("_eye");
// // should return true.
//
// palindrome("race car");
// // should return true.
//
palindrome("not a palindrome");
// // should return false.
//
// palindrome("A man, a plan, a canal. Panama");
// // should return true.
//
// palindrome("never odd or even");
// // hould return true.
//
// palindrome("nope");
// // should return false.
//
// palindrome("almostomla");
// // should return false.
//
// palindrome("My age is 0, 0 si ega ym.");
// // should return true.
//
// palindrome("1 eye for of 1 eye.");
// // should return false.
//
// palindrome("0_0 (: /-\ :) 0-0");
// // should return true.
//
// palindrome("five|\_/|four");
// should return false.

//