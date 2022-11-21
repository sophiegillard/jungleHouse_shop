import {plantList} from "../../datas/plantList.js";
import {PlantItem} from "./PlantItem.jsx";
import plant from '../../../public/assets/images/basil.jpeg';
import {useState} from "react";
import {Category} from "./Category.jsx";
import {Link} from "react-router-dom";
import {addToCart} from "./addToCart.js";

export const ShoppingList = ({cart, updateCart}) => {
    const [activeCategory, setCategory] = useState('');

    //Get each categories to create a select in CategoryHome.jsx
    const categories = plantList.reduce((acc, plant)=>
            acc.includes(plant.category)? acc : acc.concat(plant.category),
        []
    )


    return (<>
        <Category categories={categories} activeCategory={activeCategory} setCategory={setCategory} cart={cart} updateCart={updateCart}/>
        <ul className="flex flex-wrap gap-2 sm:gap-4 justify-center">
        {plantList.map(({ id, image, name, water, light, price, category })=>
            !activeCategory || activeCategory === category ? (
            <div
                className="group w-[46%] md:w-[23%] xl:w-[18%] p-2 shadow-2xl rounded-xl cursor-pointer hover:shadow-xl hover:border-gray-300"
                key={id}>
                <Link to={`/Plantes/${id}`}>
                   <PlantItem
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                    />
                </Link >

                <button type="submit"
                        onClick={() => addToCart(cart, updateCart, id, image, name, price)}
                        className=" bg-button-return bg-cover w-full text-gray-100 font-semibold
                hover:text-white px-4 rounded-lg h-10 mt-1 md:mt-8"
                >Ajout rapide
                </button>


            </div>
            ) : null
        )}
        </ul>
    </>)
};