import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App5() {
    return (
        <Router>
            <Routes>
                <Route path="/" element = {
                    <Home />
                }/>
                <Route path="/movies/:id" element = {
                    <Detail />
                } />
            </Routes>
        </Router>
    );
}
//https://api.coinpaprika.com/v1/tickers
export default App5;
