function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let satellites = [];

    satellites = arr.map(
        (currentVal, index) => {
            //this is the orbit's semi-major axis.
            let a = earthRadius + arr[index].avgAlt;
            // console.log(a);

            /*  This is the calculation to get the orbital period where
                we are using 2 * pi * the square root of ( a cubed / GM) based on
                the formula from wikipedia https://en.wikipedia.org/wiki/Orbital_period
             */
            let orbitalPeriod = Math.round((2 * Math.PI) * (Math.sqrt(Math.pow(a, 3) / GM)));
            // console.log(orbitalPeriod);

            //  we then return the results as an object to be added to the resulting array.
            return{
                name: currentVal.name,
                orbitalPeriod: orbitalPeriod
            };
        }
    );

    // console.log(arr);
    console.log(satellites);
    return satellites;


}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
// should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

