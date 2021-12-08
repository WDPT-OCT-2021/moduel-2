const express = require("express");
const router = express.Router();

// const router = new Class() (this is an example of how a class compares to a route you create)
//   ______|
//   |
router.get("/", (req, res, next) => {
    //  |__
    //    |
    // image /  as being a function that you create in a class.
    res.render("index");
});

// when you export router in this file, it's as if you are able to get all the function for this "class" which is called router.
module.exports = router;
