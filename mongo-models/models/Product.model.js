// Schema.Types.ObjectId
// the original way to import, which would require calling Schema.model at the bottom
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// this updated import which calls the methods directly from mongoose
const { Schema, model } = require("mongoose");

// the schema is created in order to tell the db what the structure and dataType of the information will be like for the collection in which is declared down at the bottom. This means that even if additional data is passed to the db, only the fields declared here will be stored.
const productSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String },
        price: { type: String },
        inStock: { type: Boolean },
    },
    {
        timestamp: true,
    }
);

//  collection name will be this in your db.
//                            |
const ProductModel = model("Product", productSchema);
//                               |
// the declared 'Product' name here is what the collection will be called in the database (here forth known as db).
// notice that this name is uppercase and singular. The db will create the collection and change it to lowercase and plural automatically.
module.exports = ProductModel;

// id: 1,
// name: "IPhone",
// price: "$799.99",
// inStock: true,
