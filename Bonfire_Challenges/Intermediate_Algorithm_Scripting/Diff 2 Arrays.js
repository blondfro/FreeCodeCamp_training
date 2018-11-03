Diff 2 Arrays

function diffArray(arr1, arr2) {
  var newArr = [];
	arr1.forEach(x => {
		if (arr2.indexOf(x) === -1) {
			newArr.push(x);
		}
	});
	arr2.forEach(x => {
		if (arr1.indexOf(x) === -1) {
			newArr.push(x);
		}
	});
	console.log(newArr);

  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



	
	if (a >= b) {
		longArr = [...arr1];
		shortArr = [...arr2];
		max = a;
	} else {
		longArr = [...arr2];
		shortArr = [...arr1];
		max = b;
	}
	for (let i = 0; i < max; i++) {
		if (longArr.indexOf(shortArr[i]) === -1) {
			newArr.push(shortArr[i]);
		}
	}
	
	console.log(newArr);