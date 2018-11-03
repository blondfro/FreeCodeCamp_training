/*Convert html symbols.*/

function convertHTML(str) {
    // &colon;&rpar;
    let newStr;
    //let htmlVals = ['&', '<', '>', '"', "'"];
    //console.log(htmlVals);
    let tmpArr = str.split('');
    //console.log(tmpArr);
    for (let i = 0; i < tmpArr.length; i++) {
        switch(tmpArr[i]) {
            case '&':
                tmpArr[i] = '&amp;';
                break;
            case '<':
                tmpArr[i] = '&lt;';
                break;
            case '>':
                tmpArr[i] = '&gt;';
                break;
            case '"':
                tmpArr[i] = '&quot;';
                break;
            case "'":
                tmpArr[i] = '&apos;';
                break;
            default:
                break;
        }
    }

    //console.log(tmpArr);
    newStr = tmpArr.join('');
    console.log(newStr);

    return newStr;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc")