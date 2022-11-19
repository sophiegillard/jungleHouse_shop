import {useParams} from "react-router-dom";
import {plantList} from "../datas/plantList.js";
import {addToCart} from "../components/Shop/addToCart.js";
import {CareScale} from "../components/Shop/Scales.jsx";

export const PlanteItem = ({cart, updateCart}) =>{
    const params = useParams()
    console.log(params)

    return (
        <div className="flex justify-center h-full md:bg-[url('./../assets/images/blur.jpg')] bg-no-repeat
        lg:bg-none">
            {plantList.map(({ id, image, name, water, light, price, category, description })=>{
                if(params.id === id ){
                   return <div className="flex flex-col p-4 h-[90vh] justify-between bg-white
                   390:h-[93vh]
                   md:w-[65vw] md:text-xl md:p-10 md:h-[95vh]
                   lg:flex-row lg:gap-20 lg:items-center lg:w-[89vw] lg:h-auto">
                       <div className="image w-[100%] h-[30vh] self-center
                       390:h-[37vh] md:h-[45vh]
                       lg:w-[40vw]">
                           <img src={image} alt={name}
                           className="w-full h-full rounded-lg object-cover object-top"/>
                       </div>

                       <div className="lg:container lg:flex lg:flex-col">
                           <div className="ProductDesc">
                               <h3 className="font-bold text-green-logo text-3xl italic font-['Cheltenham'] tracking-wider
                               md:text-4xl md:mt-4">{name}</h3>
                               <p className="text-green-logo
                               ">Categorie: {category} - Ref. {id}</p>
                               <p className="text-gray-shop mt-4 max-h-[20vh] overflow-scroll text-justify
                               390:h-[23vh]
                               md:h-[15vh]">{description}</p>
                               <h5 className="font-bold">Entretien :</h5>
                               <div className="flex flex-row gap-6">
                                   <p className="flex gap-2 ">Exposition <CareScale name={name} careType='light' scaleValue={light}/> </p>
                                   <p className="flex gap-2 ">Arrosage <CareScale name={name} careType='water' scaleValue={water}/> </p>
                               </div>
                           </div>

                           <div className="ProductPrice my-4">
                               <p className="flex items-end gap-4">
                                   <span className="font-bold text-5xl text-green-logo
                                   md:text-6xl">{price.toFixed(2)} €</span>
                                   <span>|</span>
                                   Prix TVAC </p>
                           </div>


                           <button type="submit"
                                   onClick={() => addToCart(cart, updateCart, id, image, name, price)}
                                   className=" bg-button-return bg-cover w-full text-gray-100 font-semibold
                                        hover:text-white px-4 rounded-lg h-14 390:h-18"
                           >Ajouter au panier
                           </button>

                       </div>
                   </div>
                }
            })}
        </div>
    )
}