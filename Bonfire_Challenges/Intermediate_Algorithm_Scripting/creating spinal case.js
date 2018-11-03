creating spinal case

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newStr = str.replace(/([A-Z])/g, ' $1').trim().replace(/[^A-Za-z]/g, ' ').toLowerCase();
	let tmpArr = newStr.split(/\s+/);
	newStr = tmpArr.join('-');
  //let arr = str.split(/[^A-Za-z]/);
	console.log(newStr);

  return newStr;
}

//spinalCase('This Is Spinal Tap');
//spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
//spinalCase("Teletubbies say Eh-oh");
//spinalCase("AllThe-small Things");