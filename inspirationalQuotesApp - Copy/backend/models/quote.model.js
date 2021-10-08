const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema(
    {
        Quote: {
            type: String,
            required: [true, "Quote is required"],
            minlength: [8, "Quote must be at least 8 characters"],
        },
        Speaker: {
            type: String,
            required: [true, "Speaker field cannot be empty"],
            minlength: [4, "Speaker's name must be at least 4 characters"],
        },
    },
    { timestamps: true }
);

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;
