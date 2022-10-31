import {CareScale} from "./Scales.jsx";
import {showName} from "./PlantItem.js";

export const PlantItem = ({price, name, image,id, light, water}) =>{

    return(
        <li key={id} >
            <div className="relative h-44 sm:h-auto">
                <p className="bg-green-logo-light h-12 w-16 rounded-t-lg rounded-r-lg text-center pt-3 absolute top-0 right-0">{price} €</p>
                <img src={image} alt={name}  onClick={() => showName(name)} className="sm:h-60 h-[100%] w-[100%] object-cover rounded-lg z-10"/>
            </div>
            <div className="flex flex-col md:flex-row justify-between pt-2">
                <div>
                    <p className="font-bold text-l capitalize">{name}</p>
                    <CareScale name={name} careType='light' scaleValue={light}/>
                    <CareScale name={name} careType='water' scaleValue={water}/>
                </div>
            </div>
        </li>
    )
}