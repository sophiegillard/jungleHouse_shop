import {Cart} from "../components/Cart/Cart.jsx";
import {ShoppingList} from "../components/Shop/ShoppingList.jsx";
import {Footer} from "../components/Footer/Footer.jsx"
import {useEffect, useState} from "react";

function Plantes({cart, updateCart}) {


    return <div className="relative z-0">
        <main>
            <ShoppingList cart={cart} updateCart={updateCart}/>
        </main>
    </div>
}

export default Plantes