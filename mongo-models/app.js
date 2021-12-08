const express = require("express");
const app = express();
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

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res, next) => {
//     res.render("index");
// });
//  the above route can now be found in the index.js file inside the routes folder. To get to that folder I need to declare that app.js uses said folder by using the code directly below this comment.
app.use("/", require("./routes/index"));
// when declaring your routes files, use relative path from app.js to the file location in the require just like you woud any normal file you require at the top of your js files when declaring variables.

// the string you initiate at the start of the app.use('/' <--- **this guy**), is the prefix to the end points of each route in the route file you require for said app.use
app.use("/blah", require("./routes/product-routes"));
//           |
// if I add 'blah' to the first field of app.use, then in order for me to get to the /products route in my file, I would have to call localhost:3000/blah/products

// app.get("/products", (req, res, next) => {
//     res.render("products/products-list", { products: myProducts });
// });

// app.get("/product/details/:productId", (req, res, next) => {
//     res.render("products/product-details.hbs", {
//         blah: myProducts[req.params.productId - 1],
//     });
// });

app.listen(3000, () => console.log("Listening on port 3000 👽"));
