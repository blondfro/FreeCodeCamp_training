Sum All Numbers in a Range:

code: 
function sumAll(arr) {
	let tmpArr = arr.map(x => x).sort((a,b) => a - b);
	let newArr = [];
	console.log(tmpArr);
	let startVal = tmpArr[0];
	let endVal = tmpArr[1];
	let diffVal = endVal - startVal + 1;
	let sum = 0;
	
	for (let i = 0; i < diffVal; i++ ) {
		newArr.push(startVal);
		startVal++;
	}
	console.log(newArr);
	
	
	for (let i = 0; i < newArr.length; i++) {
		sum = sum + newArr[i];
	}
	console.log(sum);
	
	return sum;
}

sumAll([5, 10]);