import {useParams} from "react-router-dom";
import {plantList} from "../datas/plantList.js";
import {addToCart} from "../components/Shop/addToCart.js";
import {CareScale} from "../components/Shop/Scales.jsx";

export const PlanteItem = ({cart, updateCart}) =>{
    const params = useParams()
    console.log(params)

    return (
        <>
            {plantList.map(({ id, image, name, water, light, price, category, description })=>{
                if(params.id === id ){
                   return <div className="flex flex-col p-4 h-[90vh] justify-between">
                       <div className="image w-[100%] h-[30vh] self-center">
                           <img src={image} alt={name}
                           className="w-full h-full rounded-lg object-cover object-top"/>
                       </div>

                       <div className="ProductDesc">
                           <h3 className="font-bold text-green-logo text-3xl italic font-['Cheltenham'] tracking-wider">{name}</h3>
                           <p className="text-green-logo">Categorie: {category} - Ref. {id}</p>
                           <p className="text-gray-shop mt-4 max-h-[20vh] overflow-scroll">{description}</p>
                           <h5 className="font-bold">Entretien :</h5>
                           <div className="flex flex-row gap-6">
                               <p className="flex gap-2 ">Exposition <CareScale name={name} careType='light' scaleValue={light}/> </p>
                               <p className="flex gap-2 ">Arrosage <CareScale name={name} careType='water' scaleValue={water}/> </p>
                           </div>
                       </div>

                       <div className="ProductPrice my-4">
                           <p className="flex items-end gap-4"> <span className="font-bold text-5xl text-green-logo">{price.toFixed(2)} €</span> <span>|</span>  Prix TVAC </p>
                       </div>

                       <button type="submit"
                               onClick={() => addToCart(cart, updateCart, id, image, name, price)}
                               className=" bg-button-return bg-cover w-full text-gray-100 font-semibold
                                    hover:text-white px-4 rounded-lg h-10"
                       >Ajouter au panier
                       </button>
                   </div>
                }
            })}
        </>
    )
}