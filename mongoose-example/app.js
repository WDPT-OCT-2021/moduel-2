// =========  variables on top of app.js ==========
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// ============  DB connection comes next ===========
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

// ===========  Middleware after your DB connection ======
app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// ============ Routes come 2nd to last on app.js ========
app.use("/", require("./routes/index"));
app.use("/products", require("./routes/product-routes"));

// ==========  App Listener comes last declaring the port to listen to ============
app.listen(3000, () => console.log("Listening on port 3000 👽"));
