function convertToRoman(num) {
    /*  this array contains the needed roman numerals.
        It has the primary ones and the minus points like 9, and 40.
     */
    const romanNumerals = [
        'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ];

    //  this array contains the decimal equivalents to the roman numeral sets
    const decimals = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];

    //  this will store the converted value.
    let converted = '';

    /*  create a for loop that iterates over the length of the decimal array.
        then inside the for loop, use a while loop to check if the passed in number
        is divisible by the current decimal value and is less than the passed in number.
        once that condition is met, add in the corresponding roman numeral,
        reduce the number by the decimal amount and run again until the loops complete.
     */
    for (let i = 0; i <= decimals.length; i++) {
        while (num % decimals[i] < num) {
            converted += romanNumerals[i];

            num -= decimals[i];
        }
    }

    console.log(converted);
    return converted;
}

convertToRoman(36);

convertToRoman(2);
// should return "II".

convertToRoman(3);
// should return "III".

convertToRoman(4);
// should return "IV".

convertToRoman(5);
// should return "V".

convertToRoman(9);
// should return "IX".

convertToRoman(12);
// should return "XII".

convertToRoman(16);
// should return "XVI".

convertToRoman(29);
// should return "XXIX".

convertToRoman(44);
// should return "XLIV".

convertToRoman(45);
// should return "XLV"

convertToRoman(68);
// should return "LXVIII"

convertToRoman(83);
// should return "LXXXIII"

convertToRoman(97);
// should return "XCVII"

convertToRoman(99);
// should return "XCIX"

convertToRoman(400);
// should return "CD"

convertToRoman(500);
// should return "D"

convertToRoman(501);
// should return "DI"

convertToRoman(649);
// should return "DCXLIX"

convertToRoman(798);
// should return "DCCXCVIII"

convertToRoman(891);
// should return "DCCCXCI"

convertToRoman(1000);
// should return "M"

convertToRoman(1004);
// should return "MIV"

convertToRoman(1006);
// should return "MVI"

convertToRoman(1023);
// should return "MXXIII"

convertToRoman(2014);
// should return "MMXIV"

convertToRoman(3999);
// should return "MMMCMXCIX"

