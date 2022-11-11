import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;