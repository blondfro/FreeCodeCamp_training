Sorted Union using array filter:

function uniteUnique() {
  //console.log(arr);
  let newArr = [];
	let tmpArr = [];
  //console.log(arguments.length);
	//console.log(arguments[0]);
	//console.log(arguments[1]);
	//console.log(arguments[2]);
	for (let i = 0; i < arguments.length; i++) {
		tmpArr = tmpArr.concat(arguments[i]);
		//console.log(tmpArr);
	};
	newArr = tmpArr.filter((el, index) => {
		console.log(el, index);
		return tmpArr.indexOf(el) == index;
	});
	console.log(newArr)

	
	return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1], 7);
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
//uniteUnique([1, 2, 3], [5, 2, 1]);
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
