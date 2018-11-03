// Creating Pig Latin:

    function translatePigLatin(str) {
        let startLetter = str.charAt(0);
        let tmpStr;
        let newStr;
        let vowels = /[aeiou]/;

        if (vowels.test(startLetter) === false) {
            let count = 1;
            while (vowels.test(str.charAt(count)) !== true) {
                startLetter = startLetter.concat(str.charAt(count));
                count++;
                //console.log(startLetter);
            }
            tmpStr = str.slice(count, str.length);
            //tmpStr = tmpStr.concat(str.slice(count - 1, str.lenght));
            newStr = tmpStr.concat(startLetter, 'ay');
        } else {
            tmpStr = str;
            newStr = tmpStr.concat('way');
        }
        //console.log(newStr);
        return newStr;
    }

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");