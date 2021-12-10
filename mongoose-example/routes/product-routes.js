const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model");

router.get("/", (req, res, next) => {
    // this is considered your Read method from CRUD
    Product.find()
        .then((productsFromDb) => {
            res.render("products/products-list", { products: productsFromDb });
            // res.render("products/products-list", { products: myProducts });
        })
        .catch((err) => console.log(`Error finding products: ${err}`));
});

router.get("/details/:productId", (req, res, next) => {
    // the .find() method will always return an array of objects from your db
    // Product.find({ id: req.params.productId })

    // the .findOne() method will return an object for the first match it finds on your db for the parameters you pass
    // this is also considered your Read method from CRUD
    // use find or findOne method when searching for a field in your data that is not the _id.
    // Product.findOne({ id: req.params.productId })

    // when searching for data using the _id from the DB, you can use the method .findById
    Product.findById(req.params.productId)
        .then((productFromDb) => {
            // ************** always res in your .then *********
            // anything you do after the .then other than the catch, will not run.
            console.log({ productFromDb });

            // only res once per route. Any additional res methods will not trigger or will give issues.
            res.render("products/product-details.hbs", { blah: productFromDb });
        })
        .catch((err) => console.log(`Error finding product in db: ${err}`));

    // res.render("products/product-details.hbs", {
    //     blah: myProducts[req.params.productId - 1],
    // });
});

module.exports = router;

// ********* The main methods you will be working with, will be .find(), .findOne(), .findById(), .finByIdAndDelete(), .findByIdAndRemove(), .findAndDelete(), .findByIdAndUpdate, .findAndUpdate(), .create() *************
