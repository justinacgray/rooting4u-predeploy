import React, { useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";

const QuoteContainer = () => {
    // const [currentQuote, setCurrentQuote] = useState({});
    const [randomQuote, setRandomQuote] = useState({});

    // needed a separate function to randomize the quotes
    const getRandomQuote = (quotesArray) => {
        // Get a random number, between 0 and the length of the quotesArray
        let randomNum = Math.floor(
            Math.random() * Math.floor(quotesArray.length)
        );
        // Use that random number as the quotesArray index, to grab a random quote.
        let quote = quotesArray[randomNum];

        //returning one single quote
        setRandomQuote(quote);

        //if statement can be here if data is not prsent to return a message
    };

    //this function does the click to GET the quotes
    const handleQuoteClick = (e) => {
        e.preventDefault();

        axios
            .get("http://localhost:7000/api/quotes/")
            .then((res) => {
                console.log(res.data);
                getRandomQuote(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div id="quote-box">
            <h2>Encouragment For Today</h2>
            <blockquote id="text">
                {/* {randomQuote.Quote} {randomQuote.Speaker} */}
                {/* OR use chain operator which checks if the key exists benefit: is that if the key does not exist that my computer won't crash*/}
                <span>&ldquo;</span>
                {randomQuote?.Quote} <span>&rdquo;</span>
            </blockquote>
            <div id="speaker">{randomQuote?.Speaker}</div>
            {/* {randomQuote?.time} ----- this will not work but the page will not show an error but if if you look in the console it shows the keys that available*/}
            <button onClick={handleQuoteClick} id="randomQuoteBtn">
                Encourage Me
            </button>
        </div>
    );
};

export default QuoteContainer;
