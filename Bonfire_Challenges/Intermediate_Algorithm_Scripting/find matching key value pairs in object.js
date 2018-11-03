function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
	let objKey = Object.keys(source); // this now becomes an array that contains the key passed in from source. 
	//filter the array based on the key value.  
	////use the every method, passing it key, to check each object in an array passes the criteria. 
	arr = collection.filter(obj =>
					objKey.every(key => 
											obj.hasOwnProperty(key) && obj[key] === source[key]));
		console.log(arr);			
  // Only change code below this line
  
  
  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
//whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});