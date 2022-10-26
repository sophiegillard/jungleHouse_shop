import {CareScale} from "./Scales.jsx";
import {showName} from "./PlantItem.js";

export const PlantItem = ({price, name, cover,id, light, water}) =>{

    return(
        <li key={id} className="p-7 w-1/5 h-1/5">
            <div className="relative">
                <p className="bg-green-300 h-12 w-16 rounded-t-lg rounded-r-lg text-center pt-3 absolute top-0 right-0">{price} €</p>
                <img src={cover} alt={name}  onClick={() => showName(name)} className="h-60 w-60 rounded-lg z-10"/>
            </div>
            <div className="flex justify-between pt-2">
                <div>
                    <p>{name}</p>
                    <CareScale name={name} careType='light' scaleValue={light}/>
                    <CareScale name={name} careType='water' scaleValue={water}/>
                </div>
                <button type="submit"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-10 mt-8"
                >Ajouter
                </button>
            </div>
        </li>
    )
}