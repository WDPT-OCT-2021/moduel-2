const mongoose = require("mongoose");
const Product = require("../models/Product.model");
// any file that will be utilizing CRUD (Create, Read, update, Delete) with your db, you need to require the model for the data that will be manipulated in the file.

// in seed file you add the connection to your db so that you have a way of adding data to start testing your routes and models
mongoose
    .connect("mongodb://localhost/mongoose-example")
    .then((dataFromDb) => {
        console.log(
            `Connected to Mongo! Database name: ${dataFromDb.connections[0].name}`
        );
    })
    .catch((err) => {
        console.log(`Error connecting to mongo:  ${err}`);
    });

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

const mySingleProduct = {
    id: 5,
    name: "Sports Car V.2",
    price: "$94,799.99",
    inStock: true,
};

// deleteMany() is a built in method with mongoose that allows you to delete all the data in a collection that is called.
Product.deleteMany()
    .then(() => {
        // .create is your main mongoose method to create data in your db. This can except a single object or an array of objects as an argument
        return Product.create(myProducts);
        // return Product.create(mySingleProduct);
        // return Product.create({
        //     id: 5,
        //     name: "Sports Car V.2",
        //     price: "$94,799.99",
        //     inStock: true,
        // })
    })
    .then((dataFromDb) => {
        console.log(
            `${dataFromDb.length} products created with the following ids: `
        );
        console.log(dataFromDb.map((product) => product._id));
    })
    .then(() => {
        // only really required in your seeds file just so that it does not keep your mongo shell open on terminal. You can use the built in mongoose method of mongoose.disconnect()
        mongoose.disconnect();
    })
    .catch((err) => {
        mongoose.disconnect();
        throw err;
    });

// update example

// when updating there are 3 fields to pay attention to, the query field (when using findByIdAndUpdate, this field would be the _id), update data, and pass {new: true} if you want to see the updated data instead of the previous data when passing it to a page or even logging it.
//                   query field      update data        {new: true}
//                         |            |                  |
Product.findAndUpdate({ id: 2 }, { price: "$2880.99" }, { new: true })
    .then((updatedProductFromDb) => {
        console.log(`The Updated product:  ${updatedProductFromDb}`);
    })
    .then(() => {
        mongoose.disconnect();
    })
    .catch((err) => {
        mongoose.disconnect();
        throw err;
    });

// Delete example

Product.findAndDelete({ id: 2 })
    .then(() => {
        console.log("Successfully deleted an item");
    })
    .then(() => {
        mongoose.disconnect();
    })
    .catch((err) => {
        mongoose.disconnect();
        throw err;
    });
