const mongoose = require("mongoose");
const dbName = "inspirationalQuotesDB";

//similar to url but specifically for Monggo
mongoose
    .connect("mongodb://localhost/" + dbName, {
        //connection options
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(
            "WE IN HERE! Established connection to the " +
                dbName +
                " database. YAY!"
        );
    })
    .catch((err) => {
        console.log(
            "WHOP WHOP...Something went wrong when connecting to the " +
                dbName +
                " database"
        );
    });
