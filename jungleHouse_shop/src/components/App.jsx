import {BannerCart} from "./Header/BannerCart.jsx";
import {Cart} from "./Cart/Cart.jsx";
import {ShoppingList} from "./Shop/ShoppingList.jsx";
import {Category} from "./Shop/Category.jsx";
import {Footer} from "./Footer/Footer.jsx"
import {useEffect, useState} from "react";

function App() {
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

export default App