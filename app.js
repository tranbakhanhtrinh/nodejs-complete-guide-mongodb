const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// const adminRoute = require('./routes/admin');
// const shopRoute = require('./routes/shop');
const mongoConnect = require('./util/database');

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // the second param is the name of folder "views"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
// console.log(path.join(__dirname));
app.use((req, res, next) => {
    // User.findByPk(1)
    //     .then(user => {
    //         req.user = user;
    //         next();
    //     })
    //     .catch(err => { console.log(err) })
})

// app.use("/admin", adminRoute); // if we add the first argument, the routes in adminRoute will automatically add a prefix /admin
// app.use(shopRoute);

app.use(errorController.get404);

const port = process.env.PORT || 3000;

mongoConnect(client => {
    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });
})