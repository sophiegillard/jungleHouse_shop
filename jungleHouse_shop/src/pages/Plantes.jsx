import {Cart} from "../components/Cart/Cart.jsx";
import {ShoppingList} from "../components/Shop/ShoppingList.jsx";
import {Footer} from "../components/Footer/Footer.jsx"
import {useEffect, useState} from "react";

function Plantes() {
    const initialCart = JSON.parse(window.localStorage.getItem('cart'))
    const [cart, updateCart] = useState(initialCart);

    useEffect(() => {
            window.localStorage.setItem('cart', JSON.stringify(cart))
        },[cart]
    )

    return <div className="relative z-0">
        <Cart cart={cart} updateCart={updateCart} />
        <main>
            <ShoppingList cart={cart} updateCart={updateCart}/>
            <Footer />
        </main>
    </div>
}

export default Plantes