Smallest common multiple

function smallestCommons(arr) {
  let sortedArr = arr.sort((a,b) => b - a); //sorting the array with highest value first. 
	//console.log(sortedArr);
	let lowNum = sortedArr[1];
	let highNum = sortedArr[0];
	let tmpArr = [];
	
	let lcm = 0;	//lowest common multiple result var. 
	let loopCount = 1;		// 
	let x;								// run code while x is not = to the lenght of the array. 
	
	for (let i = highNum; i >= lowNum; i--) {
		tmpArr.push(i);
		//console.log(tmpArr);
	}
	
	do {
		lcm = tmpArr[0] * loopCount * tmpArr[1];
		//console.log(lcm);
		for (x = 2; x < tmpArr.length; x++) {
			if (lcm % tmpArr[x] !== 0) {
				break;
			}
		}
		
		loopCount++;
		
	} while (x !== tmpArr.length);
	
	console.log(lcm);
	return lcm;
}


smallestCommons([1,5]);
//smallestCommons([5, 1]);
//smallestCommons([2, 10]);
//smallestCommons([1, 13]);
//smallestCommons([23, 18]);
//