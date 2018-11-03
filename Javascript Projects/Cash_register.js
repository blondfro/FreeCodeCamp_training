function checkCashRegister(price, cash, cid) {
    const change = cash - price;
    let register = 0;
    let res = {
        status: '',
        change: [],
    };

    //  this object has the actual names and
    let cashVals = [.01, .05, .10, .25, 1, 5, 10, 20, 100];

    //  first get the dollar amount in the drawer.
    for (let i = 0; i < cid.length; i++) {
        register += cid[i][1];
        register = +register.toFixed(2);
        // console.log(register);
    }

    if (register === change) {
        /*
            set the status to closed and return the cid in the change field.
         */
        res.status = 'CLOSED';
        res.change = [...cid];

    } else if (register < change) {
        /*
            set the status to insufficient funds and return an empty array
            as the value of change.
         */
        res.status = 'INSUFFICIENT_FUNDS';
        res.change = [];
    } else if (register > change) {
        /*
            set the status to open and return the values used to make change in
            the change field.
         */
        res.status = 'OPEN';

        /*
            This for loop will cycle through the values and subtract the
            appropriate amount.  It will also push the amount form the
            register's array.
        */

        /*
            tmp change is to store and check when the current cash value and
            check if it's less than the current cash value.
            curr change is to hold the current amount of change being processed.
            curr reg val will hold the current amount of the registry and used to
            check to make sure that that amount in the cash drawer isn't empty.
         */
        let tmpChange = change;
        let currChange = 0;
        let currRegVal;
        for (let i = cashVals.length - 1; i >= 0; i--) {
            /*
            first getting the current amount being checked in the cash register
            and assign it to the currRegVal.
             */
            currRegVal = cid[i][1];

            /*
            create a while loop to iterate over the cash value.  Checking to see
            if the current cash value is less than or equal to tmp Change and if
            current reg value doesn't equal 0.
             */
            while (cashVals[i] <= tmpChange && currRegVal !== 0) {
                tmpChange = tmpChange - cashVals[i];
                tmpChange = +tmpChange.toFixed(2);
                currRegVal -= cashVals[i];
                currChange += cashVals[i];
                currChange = +currChange.toFixed(2);
            }

            /*
                check to make sure that the current change is not 0 doesn't
                equal 0, then push the current register value.
             */
            if (currChange > 0) {
                res.change.push([cid[i][0], currChange]);
            }
        }

        /*
            check to make sure that the amount being processed is doesn't equal
            the change required.  If it isn't return insufficient funds.
         */
        if (currChange !== change) {
            res.status = 'INSUFFICIENT_FUNDS';
            res.change = [];
        }
        // console.log(currChange);

    }

    console.log(res);

    return res;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
//
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// // should return {status: "INSUFFICIENT_FUNDS", change: []}.
//
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// // should return {status: "INSUFFICIENT_FUNDS", change: []}.
//
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
