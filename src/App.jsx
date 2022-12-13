import React, { useEffect, useState } from "react";
import { Router } from "./routes/Index";
import { MainContext } from "./context/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
    const [endAnimation, setEndAnimation] = useState(true)
    document.cookie = '__server=http://localhost:3001';
    document.cookie = '__unnecessary=true';

    

    var cookies = document.cookie.split(';')
        .map((cookie)=> cookie.split('='))
        .reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value) }), {});


    useEffect(() => {
        Aos.init({ duration: 600 });
    }, []);

    
    // close initial animation
    // setTimeout(() => {
    //     setEndAnimation(true);
    // }, 1500);
    // setTimeout(() => {
    //     setEndAnimation(true);
    // }, 1500);


    return (
        <MainContext>
            <div className="app">
                <Router /> 
            </div>
        </MainContext>
    );
}

export default App;
