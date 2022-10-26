import {Banner} from "./Header/Banner.jsx";
import {Cart} from "./Cart/Cart.jsx";
import {ShoppingList} from "./Shop/ShoppingList.jsx";
import {Category} from "./Shop/Category.jsx";
import {Footer} from "./Footer/Footer.jsx"

function App() {
    return <div><Banner/>
        <main>
            <Cart />
            <Category/>
            <ShoppingList/>
            <Footer />
        </main>
    </div>
}

export default App