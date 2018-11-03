Search and Replace

function myReplace(str, before, after) {
  let newStr;
	let fstLtr = before.charAt(0);
	let caseRegex = /[A-Z]/g;
	if (caseRegex.test(fstLtr) === true) {
		let newStart = after.charAt(0).toUpperCase();
		//console.log(newStart);
		
		newStr = str.replace(before, newStart.concat(after.slice(1, after.length)));
		//console.log(after);
	} else {
		newStr = str.replace(before, after);
	}
	console.log(newStr);
	return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");