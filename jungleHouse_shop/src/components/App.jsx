import {BannerCart} from "./Header/BannerCart.jsx";
import {Cart} from "./Cart/Cart.jsx";
import {ShoppingList} from "./Shop/ShoppingList.jsx";
import {Category} from "./Shop/Category.jsx";
import {Footer} from "./Footer/Footer.jsx"
import {useState} from "react";

function App() {
    const [cart, updateCart] = useState([]);

    return <div className="relative z-0">
            <BannerCart cart={cart} updateCart={updateCart}/>

        <main>
            <Category/>
            <ShoppingList/>
            <Footer />
        </main>
    </div>
}

export default App