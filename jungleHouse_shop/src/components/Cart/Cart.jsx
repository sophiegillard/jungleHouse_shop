import close from '../../assets/images/left-arrow.png';
import {useState} from "react";

export const Cart = () => {
 const [isOpen, setIsOpen] = useState(false);

 return isOpen?
     (<div>
        <div className="bg-gray-300">
            <button onClick={()=>setIsOpen(false)} className='flex justify-end'>
                <img src={close} alt="close button" className="h-8"/>
                <p>Continuez vos achats</p>
            </button>
        </div>

        <div className="cart md:w-1/4 flex-col p-7">
            <h3 className='text-xl text-green-logo font-bold mb-2'>Panier</h3>
                <ul className="list-cart
                space-y-1 max-w-md list-disc list-inside">
                    <li>1 Olive Tree€</li>
                </ul>
            <p className="total text-xl semifont-bold mt-2 mb-4">Total: €</p>
            <button className="empty cart
            text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Empty the cart
            </button>
        </div>
    </div>) : (
        <img src={close} onClick={()=>setIsOpen(true)}/>
     )
}

