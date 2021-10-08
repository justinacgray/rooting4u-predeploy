//backend has its own routes, seperate from the frontend- they have nothing to do with one another
const QuoteController = require("../controllers/quote.controller");

module.exports = (app) => {
    app.get("/api/quotes/", QuoteController.findAllQuotes);
    app.get("/api/quotes/:id", QuoteController.findOneQuote); //connects to req.params.id
    app.post("/api/quotes/new/", QuoteController.createNewQuote);
    app.put("/api/quotes/update/:id", QuoteController.updateQuote);
    app.delete("/api/quotes/delete/:id", QuoteController.deleteQuote);
};
