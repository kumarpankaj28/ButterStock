import React from "react";
import Home from "./Home";
import {  Route } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

function App(){
    return (
        <div className="App">
            <Route path="/" exact={true}><Home/></Route>
            <Route path="/home"><Home/></Route>
            <Route path="/services"><Services/></Route>
            <Route path="/about"><About/> </Route>
            <Route path="/contact"><Contact/></Route>

        </div>
    )
}

export default App;