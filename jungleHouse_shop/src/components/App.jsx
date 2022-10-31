import { Routes, Route } from "react-router-dom";
import Plantes from "../pages/Plantes.jsx";
import Home from "../pages/Home.jsx";
import {useEffect, useState} from "react";
import {Cart} from "./Cart/Cart.jsx";

function App() {
    const initialCart = JSON.parse(window.localStorage.getItem('cart'))
    const [cart, updateCart] = useState(initialCart);

    useEffect(() => {
            window.localStorage.setItem('cart', JSON.stringify(cart))
        },[cart]
    )

    return (
    <>
        <Cart cart={cart} updateCart={updateCart} />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/plantes" element={<Plantes />} />
    </Routes>
    </>
)}

export default App