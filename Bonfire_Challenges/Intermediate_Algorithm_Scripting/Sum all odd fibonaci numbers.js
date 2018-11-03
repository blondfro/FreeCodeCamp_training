Sum all odd fibonaci numbers

function sumFibs(num) {
	let startNum = num;
	let prevNum = 0;
	let currNum = 1;
	let sum = 0;
	let temp;
	
  while (currNum <= startNum){
		if (currNum % 2 !== 0) {
			sum += currNum;
			
		}
		temp = currNum + prevNum;
		prevNum = currNum;
		currNum = temp;
    //b = temp;
		//console.log(sum);
  }

  console.log('final number is', sum)
	return sum;
}

sumFibs(4);
sumFibs(1000);
sumFibs(4000000);
sumFibs(1);
sumFibs(75024);
sumFibs(75025);