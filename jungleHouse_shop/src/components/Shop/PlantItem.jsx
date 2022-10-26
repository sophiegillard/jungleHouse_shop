import {CareScale} from "./Scales.jsx";
import {showName} from "./PlantItem.js";

export const PlantItem = ({price, name, cover,id, light, water}) =>{

    return(
        <li key={id} className="w-[46%] md:w-[31%] xl:w-[23%] p-2 border-2 border-gray-300 rounded-lg">
            <div className="relative h-44 sm:h-auto">
                <p className="bg-green-logo-light h-12 w-16 rounded-t-lg rounded-r-lg text-center pt-3 absolute top-0 right-0">{price} €</p>
                <img src={cover} alt={name}  onClick={() => showName(name)} className="sm:h-60 h-[100%] w-[100%] object-cover rounded-lg z-10"/>
            </div>
            <div className="flex flex-col md:flex-row justify-between pt-2">
                <div>
                    <p className="font-bold text-l capitalize">{name}</p>
                    <CareScale name={name} careType='light' scaleValue={light}/>
                    <CareScale name={name} careType='water' scaleValue={water}/>
                </div>
                <button type="submit"
                        onClick={() => updateCart(cart + 1)}
                className=" bg-transparent bottom-0 hover:bg-blue-drop text-blue-drop font-semibold
                hover:text-white px-4 border border-blue-drop hover:border-transparent rounded h-10 mt-4 md:mt-8"
                >Ajouter
                </button>
            </div>
        </li>
    )
}