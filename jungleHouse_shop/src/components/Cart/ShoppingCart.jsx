import close from "../../assets/images/previous.png";
import deleteIcon from "../../assets/images/delete.png";
import attention from "../../assets/images/attention.png";
import {useState} from "react";
import cartImg from "../../assets/images/shopping-cart.png";

export const ShoppingCart = ({cart, updateCart}) =>{

    const [isCartOpen, setIsCartOpen] = useState(false);

    const total = cart.reduce(
        (acc, plant)=> acc + plant.amount * plant.price, 0);


    const handleIncrement = (id, image, name, price) =>{
        const newList = cart.map(item =>{
            if(item.id === id){
               return {id, image, name, price, amount : item.amount + 1}
            }else{
                return item
            }
        });

        updateCart(newList)
    }


    const handleDecrement = (id, image, name, price) =>{
        const newList = cart.map(item =>{
            if(item.id === id){
                return {id,image, name, price, amount : item.amount -1}
            }else{
                return item;
            }
        })

        const isQuantityNull = newList.filter(item => item.amount !== 0)
        isQuantityNull !== newList ? updateCart(isQuantityNull) : updateCart(newList);
    }


    return <>
        {isCartOpen ?
        <>
            <div className="cursor-pointer lg:mr-6" onClick={()=>setIsCartOpen(false)}>
                <img alt ="Shopping Cart" className="relative h-8 cursor-pointer" src={cartImg}/>
                {cart.length > 0 ? <span className="absolute shadow-sm bottom-5 bg-green-logo-light h-5 w-5 rounded-full flex flex-row justify-center">{cart.length}</span> : null}
            </div>
        </>
    :
        <>
            <div className="cursor-pointer lg:mr-6" onClick={()=>setIsCartOpen(true)}>
                <img alt ="Shopping Cart" className="relative h-8 cursor-pointer" src={cartImg}/>
                {cart.length > 0 ? <span className="absolute shadow-sm shadow-black bottom-5 bg-green-logo-light h-5 w-5 rounded-full flex flex-row justify-center">{cart.length}</span> : null}
            </div>
        </>}

        <div className={`top-16 shadow-lg shadow-gray-300 bg-white w-screen md:w-1/2 lg:w-1/3 h-[95vh] right-0 absolute
            flex flex-col
            overflow-y-auto
            ${isCartOpen? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-700`}>

            <div className="bg-button-return bg-cover h-16 flex p-7 flex-none">
                <button onClick={()=>setIsCartOpen(false)} className='flex gap-2 self-center'>
                    <img src={close} alt="close button" className="h-8"/>
                    <p className="text-white text-xl font-bold">Continuer mes achats</p>
                </button>
            </div>


            <div className="cart p-7 flex-1">
                <div className="flex flex-row justify-between">
                    <h3 className='text-2xl font-bold'>Panier</h3>
                    <p className='text-2xl font-bold text-gray-400'>{cart.length}{cart.length <= 1 ? " Produit" : " Produits"}</p>
                </div>

                {cart.length > 0 ? (
                    <div className="">
                        <ul className="h-[550px] overflow-scroll my-4 bg-gray-100">
                            {cart.map(({id, image, name, price, amount }) => (
                                <div key={`${id}`} className="border-b-2 p-4">

                                    <h4 className="font-bold text-center capitalize text-2xl mb-4">{name}</h4>

                                    <div className="flex flex-row justify-center items-center flex-wrap gap-4">
                                        <div className="flex justify-between items-center w-full">
                                            <img className="h-16 w-16 object-cover" src={image} alt={name}/>

                                            {/*BUTTON AJOUT */}
                                            <div className="h-10 w-28 ">
                                                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                    <button data-action="decrement"
                                                            onClick={() => handleDecrement(id, image, name, price)}
                                                            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                        <span className="m-auto text-2xl font-thin"
                                                        >−</span>
                                                    </button>
                                                    <span className="justify-center w-full bg-gray-300 font-semibold focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                                    >{amount}</span>
                                                    <button data-action="increment"
                                                            onClick={() => handleIncrement(id, image, name, price)}
                                                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                        <span className="m-auto text-2xl font-thin"
                                                        >+</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/*BUTTON AJOUT */}
                                        </div>

                                        <div className="w-1/2 flex justify-between self-center">
                                            <span className="font-bold text-xl self-center">{price.toFixed(2)} €</span>
                                            <button onClick={()=>{
                                                let cartList = cart;
                                                updateCart(cartList.filter(a => a.id !== id));
                                            }}>
                                                <img className="h-8" src={deleteIcon}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <div className=" my-2 ">
                            <div className="flex flex-rox justify-between p-4">
                                <p>Produits ({cart.length})</p>
                                <p>{((total/121)*100).toFixed(2)} €</p>
                            </div>
                            <div className="flex flex-rox justify-between p-4">
                                <p>TVA</p>
                                <p>{((total/121)*21).toFixed(2)} €</p>
                            </div>
                            <div className="flex flex-rox justify-between p-4 border-t-2 text-2xl font-bold">
                                <p>Total à payer</p>
                                <p>{total.toFixed(2)} €</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row py-6">
                        <img className="p-1.5 h-10 w-10 bg-blue-drop rotate-180 rounded-r-lg" src={attention} alt="attentionSign"/>
                        <p className="px-4 py-2 bg-blue-drop-light w-full">Votre panier est vide</p>
                    </div>
                )}

                <button className="font-bold w-full
                                bg-button-return  bg-cover border border-gray-300 text-white
                                 hover:text-bold focus:ring-4 focus:ring-gray-200
                                 rounded-lg text-xl px-5 py-2.5 mr-2 mb-2
                                 ">
                    Commander maintenant
                </button>

                <button
                    onClick={()=>updateCart([])}
                    className="empty cart  text-sm  py-2.5  mb-2">
                    Vider le panier
                </button>
            </div>

        </div>

        </>

}