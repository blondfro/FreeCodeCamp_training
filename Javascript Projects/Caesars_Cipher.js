function rot13(str) {
    // LBH QVQ VG!

    /*
        2 const variables one for the alphabet and one for the
        shifted version of the alphabet.

       note that this works only on a 13 shift cipher. Need to find
       a way to make it work for any shift cipher.
     */
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM';

    //  the result will store the new string and be returned by the function.
    let result = '';
    let regEx = /[A-Z]/;
    let charCode = 0;
    let pos = 0;

    // create a loop to iterate over the incoming string.
    for (let i = 0; i < str.length; i++) {

        /*
            first check to make sure that the current item in the string is
            in the alphabet.
            if the current value  is in the alphabet, then add the shifted
            value to the result string, if it's not add in the value from the
            original string.
         */

        if (alphabet.indexOf(str[i]) >= 0) {
            result += shiftedAlphabet[alphabet.indexOf(str[i])];
            // console.log(alphabet.charCodeAt(alphabet.indexOf(str[i])));
            // // console.log()
            // charCode = alphabet.charCodeAt(alphabet.indexOf(str[i]));
            // console.log(alphabet[alphabet.indexOf(str[i])], str[i]);
        } else {
            result += str[i];
            // console.log('not here');
        }
    }

    // console.log(charCode);
    // console.log(String.fromCharCode(charCode));
    // console.log(alphabet.charCodeAt(13));
    // console.log(String.fromCharCode(alphabet.charCodeAt(13)));
    // console.log(String.fromCharCode(charCode + 13));

    console.log(result);
    return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
// should decode to FREE CODE CAMP

rot13("SERR CVMMN!");
// should decode to FREE PIZZA!

rot13("SERR YBIR?");
// should decode to FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
// should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.