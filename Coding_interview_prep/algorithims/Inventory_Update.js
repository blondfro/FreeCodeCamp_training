function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    let updateArr = [...arr1]; // stores the original array of the current inventory.
    let tmpArr = []; // will store the 1D array of inventory items only.

    // populate the 1d array with the current inventory items.
    for(let x = 0; x < arr1.length; x++) {
        tmpArr = tmpArr.concat(arr1[x][1]);
    }

    console.log(tmpArr);

    /*
     * the for loop iterates over the new inventory items and checks to see if they
     * exist in the orignal list.  If they don't, they get added to the list, if they
     * do, then the amount of the items is updated.
     */
    for(let i = 0; i < arr2.length; i++) {
        let idx = tmpArr.indexOf(arr2[i][1]);
        if(idx === -1) {
            updateArr.push(arr2[i]);
        } else {
            updateArr[idx][0] = updateArr[idx][0] + arr2[i][0];
        }
    }

    console.log(updateArr);

    // sort the inventory alphabetically.
    updateArr.sort((a, b) => {
        if (a[1] === b[1]) {
            return 0;
        } else {
            // useing a ternary statement for if / else
            return (a[1] < b[1]) ? -1 : 1;
        }
    });
    console.log(updateArr);
    arr1 = [...updateArr];
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);