// =============== Async/Await ===================

// creating a promise
// const myThirdFunc = new Promise( (resolve, reject) => {
//   const random = Math.floor(Math.random() * 27);
//   setTimeout(() => {
//     if(random % 1 === 0) {
//       console.log('the second promise!');
//       resolve(random);
//     } else {
//       console.log('This Failed on the second promise!!');
//       // reject(`Error => ${random}`);
//       throw new Error(`Error => ${random}`);
//     }
//   }, 2000)
// })

// calling async on a function makes it return a promise but does not make it a promise so therefor it is not a pure promise and await will not work on it.
const myPromiseFunc = async () => {
    try {
        const random = Math.floor(Math.random() * 27);
        setTimeout(() => {
            if (random % 11 === 0) {
                console.log("the return");
                return random;
            } else {
                console.log("the failure");
                return `Error => ${random}`;
            }
        }, 2000);
    } catch (err) {
        return `Error: ${err}`;
    }
};

const myPromiseFunc2 = async () => {
    // try {
    const random = Math.floor(Math.random() * 27);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (random % 11 === 0) {
                console.log("the return");
                resolve(random);
            } else {
                console.log("the failure");
                reject(`Error => ${random}`);
            }
        });
    }, 2000);
    // } catch(err) {
    //   return `Error: ${err}`
    // }
};

async function callThis() {
    // await must be called inside of an async function in order for it to work

    // await will not wait for the response of a non pure promise before moving on in the code base.

    // const result = await myPromiseFunc()
    const result = await myPromiseFunc2;
    console.log("see, its a promise!", result);

    // same as above but the above code you set the parameter (variable) first rather than in the .then()

    // myThridFunc().then(result => {
    //   console.log('see, its a promise!', result)
    // })
}

// callThis();

// ============= FETCH / AXIOS ==============
// npm stands for node package manager
// most all packages are gotten from npm site.

// this is how u declare a variable for a package (npm package also known as a dependency) in your js file.
// these are the 2 ways of adding a package to a js file. import and require methods
// import fetch from ('node-fetch');
// const fetch = require('node-fetch');
//                        |
// this require is coming from your package.json file (you should not manually manipulate your package.json unless you know what you are doing)

const myFetch = () => {
    const theDivToDisplayData = document.querySelector("#data");

    // fetch is used for GET methods (retrieving data). Axios allows for all methods that an api may offer.
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.results);
            theDivToDisplayData.innerHTML = data.results[0].name;
        })
        .catch((err) => {
            console.log({ err });
        });
    // return theResult;
};

const myAxios = async () => {
    const theDivToDisplayData = document.querySelector("#data");
    // GET method on axios is get data from an API which is the data in the database the API is connected to.
    // PUT method is normally used when you will be sending data to the API in order to Create, Update and/or Delete data on the database
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    // axios is a Promise and therefore allows you to use async await in order to wait for responses and make your code more synchronized.
    console.log({ resp: resp.data });

    theDivToDisplayData.innerHTML = resp.data.results[6].name;
};

// myFetch()

window.addEventListener("load", (event) => {
    console.log("DOM Loaded");

    // myFetch(); // this calls the fetch method to get data from an API
    myAxios();
});

/* 
1. uninstall node (npm uninstall node)
2. install nvm (npm install -g nvm)
3. nvm install --lts 
4. nvm install @12
5. type: which node (to see node version)
6. if node version is not 12 then enter: nvm use 12
7. if node default is not v. 12 the enter: nvm alias default 12
*/
