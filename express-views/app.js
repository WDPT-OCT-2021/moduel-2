const express = require("express");
const app = express();
// path does not need to be npm installed but it is required in order to set express.static path
const path = require("path");
const myProducts = [
    {
        id: 1,
        name: "IPhone",
        price: "$799.99",
        inStock: true,
    },
    {
        id: 2,
        name: "LG 80' TV",
        price: "$1699.99",
        inStock: false,
    },
    {
        id: 3,
        name: "Baby Yoda (the real one)",
        price: "$204,799.99",
        inStock: false,
    },
    {
        id: 4,
        name: "Sports Car",
        price: "$54,799.99",
        inStock: true,
    },
];

// this is how you set the relative path to your handle bars (or some other view engines), folder in order for you to not have to constantly be typing out __dirname/views/<your file name>
app.set("views", `${__dirname}/views`);
// the view engine that you will use, has to be declared in "".
app.set("view engine", "hbs");

// when setting up the static path to your public folder, you need to set it up using express static so that your app knows that they are your client facing files and folders.  This allows for your client facing code to work with your view pages. ie  css files and js files for dom manipulation
app.use(express.static(path.join(__dirname, "public")));

// you have to set up the parameters in the right order or you'll have issues later on. Request always first, response 2nd, 3rd is next and it is optional
app.get("/", (req, res, next) => {
    res.render("index");
});

app.get("/products", (req, res, next) => {
    res.render("products/products-list", { products: myProducts });
});

// when creating a route. You can pass a parameter by using :<param name> in order for you to use req.params.<param name you created> to view the value which was passed to it in the url.
app.get("/product/details/:productId", (req, res, next) => {
    res.render("products/product-details.hbs", {
        blah: myProducts[req.params.productId - 1],
    });
});

app.listen(3000, () => console.log("Listening on port 3000 👽"));

//  **********    COMMENTS FOR PACKAGE.JSON   ************

// in your scripts, you can add <"start": node app.js> and <"dev": nodemon app.js> to use terminal command npm start or npm run dev
// npm has base commands that can be used like , start, test, stop. etc... and any that are not base required 'run' before initializing it.
// any key: value pairs added to json files requires the key to be wrapped in double quotes "key": value
