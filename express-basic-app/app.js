// always have your variables at the top of your app.js and any other file you create.
// ============== VARIABLES ====================

const express = require("express");
const app = express();

// ============= END VARIABLES ==================

//

// =============== MIDDLEWARE CODE ==============

// ============= END MIDDLEWARE CODE ============

//

// your routes should be at the bottom of your app.js after any other code you will add to this file.
// ==================  ROUTES ==================

app.get("/", (req, res, next) => {
    // you mainly use req.query in a get route in order to get the data passed to the endpoint
    console.log({ req: req.query });
    res.send(`
    <h1>Landing Page</h1>
    <h2>This is my request: ${
        req.query.searchInput ? req.query.searchInput : "no request made"
    }</h2>
    `);
});

app.get("/home", (request, respond, next) => {
    console.log({ request });
    respond.send("<h1>Hello Ironhackers! </h1>");
});

app.get("/static", (req, res, next) => {
    // res.render is used when view engine has been set up.
    // res.render("index.html");

    // in order to view files without view engine set up you must use res.sendFile()
    // you must set a static path using __dirname as the root folder name, then path to the file you will render as if you were in the root folder.  ie: if you have index.html inside a folder called views, path would be `${__dirname}/views/index.html`
    res.sendFile(`${__dirname}/index.html`);
});

// ================= END ROUTES =================

//

// ============== LISTENING PORT # ==============

// your app.listen() should be the last element in your app.js
app.listen(3000, () => console.log("Connected to port 3000!"));

// =========== END LISTENING PORT # ===============
