const Quote = require("../models/quote.model");

module.exports.findAllQuotes = (req, res) => {
    console.log("inside find all");
    Quote.find()
        .then((allQuotes) => {
            console.log(allQuotes);
            res.json(allQuotes);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
            //always include res.json so postman and axios won't wait for a response
        });
};
module.exports.findOneQuote = (req, res) => {
    console.log("find one");
    console.log("looking for id:" + req.params.id);
    Quote.findById(req.params.id) //find this specific id from urls
        .then((oneQuote) => {
            console.log(oneQuote);
            res.json(oneQuote);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
            //always include res.json so postman and axios won't wait for a response
        });
};
module.exports.createNewQuote = (req, res) => {
    console.log("inside create");
    console.log(req.body); //the body holds the json object that we will use for create
    Quote.create(req.body)
        .then((newQuote) => {
            console.log(newQuote);
            res.json(newQuote);
        })
        .catch((err) => {
            console.log(err);
            //change the response status to 400 to indicate to client the error
            //then send the error in json to the client
            res.status(400).json(err);
        });
};
module.exports.updateQuote = (req, res) => {
    console.log("inside update");
    console.log("looking for if:" + req.params.id); //we will need id and the data to update an existing document
    console.log(req.body); //
    Quote.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //return the updated object
        runValidators: true, //use the same validation that was used for create
    }) //need these two items to update
        .then((updatedQuote) => {
            console.log(updatedQuote);
            res.json(updatedQuote);
        })
        .catch((err) => {
            console.log(err);
            //change the response status to 400 to indicate to client the error
            //then send the error in json to the client
            res.status(400).json(err);
        });
};
module.exports.deleteQuote = (req, res) => {
    console.log("inside delete");
    console.log("looking for id: " + req.params.id);
    Quote.findByIdAndDelete(req.params.id)
        .then((deletedQuote) => {
            //we get the data back as a last chance to keep it
            //you don't need to do anything else with this data
            console.log(deletedQuote);
            res.json(deletedQuote);
        })
        .catch((err) => {
            console.log(err);
            //change the response status to 400 to indicate to client the error
            //then send the error in json to the client
            res.status(400).json(err);
        });
};
