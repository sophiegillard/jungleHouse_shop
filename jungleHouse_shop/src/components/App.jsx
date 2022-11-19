import { Routes, Route } from "react-router-dom";
import Plantes from "../pages/Plantes.jsx";
import Home from "../pages/Home.jsx";
import {Noel} from "../pages/Noel.jsx";
import {Jardin} from "../pages/Jardin.jsx";
import {Meubles} from "../pages/Meubles.jsx";
import {useEffect, useState} from "react";
import {NavBar} from "./NavBar/Navbar";
import {Footer} from "./Footer/Footer.jsx";
import {PlanteItem} from "../pages/PlanteItem.jsx";
import {NotFound} from "../pages/NotFound.jsx";
import {categoryListMenu} from "../datas/categoryListMenu.js";

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
            <Route path="/" element={<Home />} />

            <Route path="/Noel" element={<Noel />} />

            <Route path="/Plantes">
                <Route index element={<Plantes cart={cart} updateCart={updateCart}/>}/>
                <Route path=":id" element={<PlanteItem cart={cart} updateCart={updateCart} />} />
            </Route>

            <Route path="/Jardin" element={<Jardin />} />

            <Route path="/Meubles" element={<Meubles />} />

            <Route path="*" element={<NotFound />} />

        </Routes>

        <Footer />
    </>
)}

export default App