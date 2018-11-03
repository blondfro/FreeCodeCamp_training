Find the missing letter

function fearNotLetter(str) {
  let charCode;
	let newStr;
	let letter;
	for (let i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i);
		if (charCode !== str.charCodeAt(0) + i) {
			letter = String.fromCharCode(charCode - 1);
			newStr = str.slice(0, i) + letter + str.slice(i, str.length);
		}
	}
		console.log(newStr);
	return newStr;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");

