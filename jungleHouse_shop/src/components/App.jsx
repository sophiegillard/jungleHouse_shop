import { Routes, Route } from "react-router-dom";
import Plantes from "../pages/Plantes.jsx";
import Home from "../pages/Home.jsx";
import {useEffect, useState} from "react";
import {NavBar} from "./Header/Navbar";
import {Footer} from "./Footer/Footer.jsx";

function App() {
    const initialCart = JSON.parse(window.localStorage.getItem('cart'))
    const [cart, updateCart] = useState(initialCart===null? [] : initialCart);

    useEffect(() => {
            window.localStorage.setItem('cart', JSON.stringify(cart))
        },[cart]
    )

    return (
    <>
        <NavBar cart={cart} updateCart={updateCart}/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Plantes" element={<Plantes cart={cart} updateCart={updateCart} />} />
    </Routes>
        <Footer />
    </>
)}

export default App