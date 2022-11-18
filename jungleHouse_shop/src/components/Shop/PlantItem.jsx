import {CareScale} from "./Scales.jsx";
export const PlantItem = ({price, name, image,id}) =>{

    return(
        <li key={id} >
            <div className="relative h-44 sm:h-auto ">
                <p className="bg-green-logo-light h-12 w-16 rounded-t-lg rounded-r-lg text-center pt-3 absolute top-0 right-0 shadow-sm shadow-black">{price} €</p>
                <img src={image} alt={name} className="sm:h-60 h-[100%] w-[100%] object-cover rounded-lg z-10"/>
            </div>
                    <p className="font-bold text-l capitalize my-2">{name}</p>
        </li>
    )
}