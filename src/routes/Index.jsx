import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Homepage } from "../pages/Homepage";
import { Feedpage } from "../pages/Feed";
import { Aboutpage } from "../pages/About";
import { Contactpage } from "../pages/Contact";
import { Productpage } from "../pages/Product";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Storespage } from "../pages/Stores";
import { Storepage } from "../pages/Store";
import { Colectionspage } from "../pages/Colections";


export function Router() { 

    

    return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/colections" element={<Colectionspage />} />
                        <Route path="/store" element={<Storepage />} />
                        <Route path="/stores" element={<Storespage />} />
                        <Route path="/feed" element={<Feedpage />} />
                        <Route path="/" element={<Homepage />} />
                        <Route path="/contact" element={<Contactpage />} />
                        <Route path="/about" element={<Aboutpage />} />
                        <Route path="/signup" element={<Register />} />
                        <Route path="/product" element={<Productpage />} />
                        <Route path="/signin" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
            
    );
}
