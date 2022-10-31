import {plantList} from "../../datas/plantList.js";
import {PlantItem} from "./PlantItem.jsx";
import plant from '../../assets/images/basil.jpeg';
import {useState} from "react";
import {Category} from "./Category.jsx";

export const ShoppingList = ({cart, updateCart}) => {
    const [activeCategory, setCategory] = useState('');

    //Get each categories to create a select in Category.jsx
    const categories = plantList.reduce((acc, plant)=>
            acc.includes(plant.category)? acc : acc.concat(plant.category),
        []
    )


    function addToCart(id, image, name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { id, image, name, price, amount : currentPlantSaved.amount + 1}
            ])
        } else {
            updateCart([...cart, { id, image, name, price, amount : 1}])
        }
    }

    return (<>
        <Category categories={categories} activeCategory={activeCategory} setCategory={setCategory} cart={cart} updateCart={updateCart}/>
        <ul className=" flex flex-wrap pl-6 md:pl-10 xl:pl-20 gap-2 sm:gap-4">
        {plantList.map(({ id, image, name, water, light, price, category })=>
            !activeCategory || activeCategory === category ? (
            <div
                className="w-[46%] md:w-[23%] xl:w-[18%] p-2 border-[1px] border-gray-200 rounded-lg"
                key={id}>
               <PlantItem
                id={id}
                light={light}
                name={name}
                water={water}
                image={image}
                price={price}
                />

                <button type="submit"
                        onClick={() => addToCart(id, image, name, price)}
                        className=" bg-button-return bg-cover w-full text-gray-100 font-semibold
                hover:text-white px-4 rounded-lg h-10 mt-4 md:mt-8"
                >Ajouter
                </button>

            </div>
            ) : null
        )}
        </ul>)
    </>)
};