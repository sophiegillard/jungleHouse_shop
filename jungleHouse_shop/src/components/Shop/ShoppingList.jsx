import {plantList} from "../../datas/plantList.js";
import {PlantItem} from "./PlantItem.jsx";
import plant from '../../assets/images/basil.jpeg';

export const ShoppingList = () => {
    return (<ul className="border-2 flex flex-wrap justify-center  gap-2 sm:gap-4">
        {plantList.map(({ id, image, name, water, light, price })=> (
           <PlantItem
            id={id}
            light={light}
            name={name}
            water={water}
            cover={image}
            price={price} />))}
        </ul>)
};