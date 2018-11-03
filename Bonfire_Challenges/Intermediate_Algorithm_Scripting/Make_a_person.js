var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    let firstName;
    let lastName;

    console.log(fullName);

    this.getFullName = function() {
        console.log(fullName);
        return fullName;
    };

    this.getFirstName = function () {
        firstName = fullName.split(' ')[0];
        console.log(firstName);
        return firstName;
    };

    this.getLastName = function () {
        lastName = fullName.split(' ')[1];
        console.log(lastName);
        return lastName;
    };

    this.setFirstName = function (first) {
        firstName = first;
        fullName = firstName + ' ' + fullName.split(' ')[1];
        console.log(fullName);
        return firstName;
    };

    this.setLastName = function (last) {
        lastName = last;
        fullName = fullName.split(' ')[0] + ' ' + lastName;
        console.log(fullName);
        return lastName;
    };

    this.setFullName = function (firstAndLast) {
        console.log(fullName);
        return fullName = firstAndLast;
    };

};

var bob = new Person('Bob Ross');

bob.getFullName();

Object.keys(bob).length;
// should return 6.

bob instanceof Person;
// should return true.

bob.firstName;
// should return undefined.

bob.lastName;
// should return undefined.

bob.getFirstName();
console.log('this is his first name', bob.getFirstName());
// should return "Bob".

bob.getLastName();
// should return "Ross".

bob.getFullName();
// should return "Bob Ross".

bob.getFullName();
// should return "Haskell Ross" after
bob.setFirstName("Haskell");

bob.getFullName();
// should return "Haskell Curry" after
bob.setLastName("Curry");

bob.getFullName();
// should return "Haskell Curry" after
bob.setFullName("Haskell Curry");

bob.getFirstName();
// should return "Haskell" after
bob.setFullName("Haskell Curry");

bob.getLastName();
// should return "Curry" after
bob.setFullName("Haskell Curry");
