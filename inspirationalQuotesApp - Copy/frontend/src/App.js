// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
// import { Router } from "@reach/router";
import QuoteContainer from "./components/QuoteContainer";

const App = () => {
    return (
        <div>
            <QuoteContainer />
        </div>
        // <Router className="App">
        //     hello
        //
        // </Router>
    );
};

export default App;
