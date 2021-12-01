// ============== without promise ==========

// myOtherFunc as a normal function
// const myOtherFunc = () => {
//   setTimeout(() => {
//     // return 'Hello World';
//     console.log('Hello World!');
//   }, 2000)
// }

// myFunc when not using promise
// const myFunc = () => {
//   // console.log(myOtherFunc());
//   myOtherFunc();
//   console.log('why did this go first!?')
// }

// =========== with promise =============

// myOtherFunc as a promise
const myOtherFunc = new Promise((resolve, reject) => {
    // good method for getting random number between 0 - 26
    const random = Math.floor(Math.random() * 27);
    setTimeout(() => {
        // return 'Hello World';
        if (random % 2 === 0) {
            console.log("Hello World!");
            resolve(random);
        } else {
            console.log("This Failed!!");
            // reject(`Error => ${random}`);
            throw new Error(`Error => ${random}`);
            // another way to reject a promise
        }
    }, 2000);
});

// // myFunc when using promise with nested then()
// const myFunc = () => {
//   // console.log(myOtherFunc());
//   myOtherFunc
//   .then((value) => {
//     console.log('why did this go first!?');
//     console.log('This is the resolve from my promise function: ', value);

//     myThirdFunc
//     .then(result => {
//       console.log('Second Promise: ', result)
//     })
//     .catch(err => console.log('Second Promise Errored: ', err))
//   })
//   .catch(err => {
//     console.log('This is the resject from the promise: ', err);
//   })
// }

// function myFunc() {

// }

// myFunc when using promise with chaining then() and finally()
const myFunc = () => {
    // console.log(myOtherFunc());
    myOtherFunc
        .then((value) => {
            console.log("why did this go first!?");
            console.log(
                "This is the resolve from my promise function: ",
                value
            );
            return value;
        })
        .then((myThirdFunc) => {
            console.log("Second Promise: ", result);
            return myThirdFunc;
        })
        .catch((err) => {
            console.log("something went wrong with a promise: ", err);
        })
        .finally((result) => {
            // using this method of stacking .then() you cannot read the values from each then like you can in nested then() as the values are scoped within the nested then()'s
            console.log("Result: ", result, value, myThirdFunc);
        });
};

const myThirdFunc = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 27);
    setTimeout(() => {
        if (random % 1 === 0) {
            console.log("the second promise!");
            resolve(random);
        } else {
            console.log("This Failed on the second promise!!");
            // reject(`Error => ${random}`);
            throw new Error(`Error => ${random}`);
        }
    }, 2000);
});

// myFunc();

//  ========= Promise All ========

const value1 = myOtherFunc;
const value2 = myThirdFunc;

const value3 = Promise.all([value1, value2]).then(() =>
    console.log("success", value1, value2)
);
console.log(value3);

// promises have 2 build in methods (resolve, reject)
// having a promise allows for 2 built in methods to be used, .then() and .catch()

// .then() is used to get the value of the resolve
// .catch() is used to get the value of the reject (usually an error)

// common - nested then()
// uncommon - Promise.all([])
// rare - chaining then()

// additional build in methods for promises are .resolve() and .reject() to force a resolution or rejection. (usually used when testing promises or created test driven code [TDD] for your codebase)
