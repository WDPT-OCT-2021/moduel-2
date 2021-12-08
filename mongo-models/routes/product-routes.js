const express = require("express");
const router = express.Router();

router.get("/products", (req, res, next) => {
    res.render("products/products-list", { products: myProducts });
});

router.get("/product/details/:productId", (req, res, next) => {
    res.render("products/product-details.hbs", {
        blah: myProducts[req.params.productId - 1],
    });
});

module.exports = router;
