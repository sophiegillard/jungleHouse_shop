import close from '../../assets/images/previous.png';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';
import {useState} from "react";


export const BannerCart = (cartItems) => {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen? (<div className="fixed top-0 left-0 right-0 z-20">

                        <div className="flex flex-row md:gap-5 p-6 md:p-7 bg-green-logo-very-light">
                            <img src={logo} alt="logo" className="h-10"/>
                            <h1 className="text-2xl font-bold">Jungle House</h1>
                        </div>


                        <div className="shadow-lg shadow-gray-300 rounded-lg bg-white">

                            <div className="bg-button-return h-16 flex ">
                            <button onClick={()=>setIsOpen(false)} className='flex gap-2 self-center '>
                                <img src={close} alt="close button" className="h-8"/>
                                <p className="text-white text-xl font-bold">Continuer mes achats</p>
                            </button>
                            </div>


                            <div className="cart md:w-1/4 flex-col p-7">
                                <h3 className='text-2xl text-green-logo font-bold mb-2'>Panier</h3>

                                <ul className="space-y-1 max-w-md list-disc list-inside">
                                    <li>1 Olive Tree€</li>
                                </ul>

                                <p className="total text-xl semifont-bold mt-2 mb-4">Total: €</p>

                                <button className="uppercase font-bold w-36
                                bg-button-return border border-gray-300 text-white
                                 hover:text-bold focus:ring-4 focus:ring-gray-200
                                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                    Commander
                                </button>

                                <button onClick={()=>updateCart(0)}
                                    className="empty cart w-36 border border-gray-300 text-sm px-5 py-2.5 mr-2 mb-2
                                    focus:ring-4 focus:ring-gray-200 font-medium rounded-lg">
                                    Vider le panier
                                </button>
                            </div>

                        </div>

                    </div>)

        :

        (<div className="fixed top-0 left-0 right-0 z-20  flex flex-row bg-green-logo-very-light justify-between p-6 md:p-7">
                <div className="flex flex-row md:gap-5">
                    <img src={logo} alt="logo" className="h-10"/>
                    <h1 className="text-2xl font-bold">Jungle House</h1>
                </div>
                <img className="h-10 cursor-pointer" src={cart} onClick={()=>setIsOpen(true)}/>
            </div>
        )
}
