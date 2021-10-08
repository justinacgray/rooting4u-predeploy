//import express and other libraries
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
//configure express app server
app.use(express.json(), express.urlencoded({ extended: true }));

//configure mongoose to connect
require("./config/mongoose.config");

//add routes to listen
const quoteRoutes = require("./routes/quote.routes");
quoteRoutes(app); // run the routes function and pas in our app server

//start the app server listening
const PORT = 7000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
