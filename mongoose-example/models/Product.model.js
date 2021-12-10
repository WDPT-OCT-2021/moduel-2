const { Schema, model } = require("mongoose");

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

const ProductModel = model("Product", productSchema);
module.exports = ProductModel;
