import React from "react";
import Header from "./Header";
import Accordion from "./Accordion";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

function General() {
    return (
        <div className="app">
            <Header/>
            <Accordion/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default  General