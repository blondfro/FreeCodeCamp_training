Sum all prime numbers 

function sumPrimes(num) {
  let sum = 0;
	
	function checkPrimeNum(val) {
		for (let k = 2; k < val; k++) {
			if (val % k === 0) {
				return false;
			}
		}
		return true;
	}
	
	for (let i = 2; i <= num; i++) {
		if (checkPrimeNum(i)) {
			sum += i;
		}	
	}
	
	console.log(sum);
	return sum;
}

sumPrimes(10);
sumPrimes(977);